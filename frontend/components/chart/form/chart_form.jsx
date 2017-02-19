import React from 'react';
import {merge} from 'lodash';

// Dropdown menu
import Dropdown from '../../dropdown/dropdown';
import DropdownTrigger from '../../dropdown/dropdown_trigger';
import DropdownContent from '../../dropdown/dropdown_content';

// Drag drop
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import ChartFormAttr from './chart_form_attr';
import ChartFormDropzone from './chart_form_dropzone';

class ChartForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentSource: "Select a source",
      sourceBool: false,
      sourceIndex: null,
      sourceTable: null,
      xAxes: this.props.xAxes,
      yAxes: this.props.yAxes
    };

    this.handleChooseSource = this.handleChooseSource.bind(this);
    this.handleSave = this.handleSave.bind(this);
    this.clearX = this.clearX.bind(this);
    this.clearY = this.clearY.bind(this);
  }

  componentDidMount() {
    this.props.fetchDataSources();
  }

  handleChooseSource(e) {
    let idx = this.props.dataSources.findIndex(src =>
      src.title === e.target.textContent
    );

    this.setState({currentSource: e.target.textContent,
      sourceBool: true,
      sourceIndex: this.props.dataSources[idx].id,
      sourceTable: this.props.dataSources[idx].table[0],
      xAxes: [],
      yAxes: []
    });
  }

  handleDrop(idx, item) {
    let {sourceIndex} = this.state;
    let newState = merge({}, this.state);
    (idx === 0) ?
      newState.xAxes.push([sourceIndex, item.attr]) :
      newState.yAxes.push([sourceIndex, item.attr]);
    this.setState(newState);
  }
  handleSave(e) {
    e.preventDefault();

    let {xAxes, yAxes} = this.state;
    this.props.updateAxes(xAxes, yAxes);
  }

  clearX() {
    this.setState({xAxes: []});
  }

  clearY() {
    this.setState({yAxes: []});
  }

  renderDropdown() {
    return(
      <Dropdown className="chart-source-menu">
        <DropdownTrigger className="current-chart-source">
          <p className="trigger">{this.state.currentSource}</p>
        </DropdownTrigger>
        <DropdownContent className="chart-source-list-wrap">
          <div className="chart-source-menu-content">
            <ul className="chart-source-menu-list">
              {this.props.dataSources.map(src => (
                <li key={src.id}
                  className="chart-source-menu-item"
                  onClick={this.handleChooseSource}>
                  <p>{src.title}</p>
                </li>
              ), this)}
            </ul>
          </div>
        </DropdownContent>
      </Dropdown>
    );
  }

  renderAttributes() {
    if (this.state.sourceBool) {
      return(
        <div className="attr-list">
          {Object.keys(this.state.sourceTable).map((row, idx) => (
            <ChartFormAttr key={idx+1} attr={row}/>
          ))}
        </div>
      );
    }
  }

  render() {
    return (
      <div className="chart-form-container">
        <div className="chart-form-options">Hello!</div>
        {this.renderDropdown()}
        <div className="chart-form">
          <div className="chart-attrs">
            <h3>Attributes</h3>
            {this.renderAttributes()}
          </div>
          <div className="chart-dropzones">
            <h3>Axes Dropzones</h3>
            <div className="zone-wrap">
              <div className="chart-dzone">
                <div className="dzone-menu">
                  <p>x-axis</p>
                  <button className="button" onClick={this.clearX}>Clear</button>
                </div>
                <ChartFormDropzone zoneId="x"
                  onDrop={item => this.handleDrop(0, item)}
                  items={this.state.xAxes}/>
              </div>
              <div className="chart-dzone">
                <div className="dzone-menu">
                  <p>y-axes</p>
                  <button className="button" onClick={this.clearY}>Clear</button>
                </div>
                <ChartFormDropzone zoneId="y"
                  onDrop={item => this.handleDrop(1, item)}
                  items={this.state.yAxes}/>
              </div>
            </div>
          </div>
        </div>
        <div className="chart-prev-foot">
          <button className="chart-preview-btn"
            onClick={this.handleSave}>
            Preview Chart
          </button>
        </div>
      </div>
    );
  }
}

export default DragDropContext(HTML5Backend)(ChartForm);
