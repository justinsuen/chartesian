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
      xAxis: [],
      yAxis: []
    };

    this.handleChooseSource = this.handleChooseSource.bind(this);
  }

  componentDidMount() {
    this.props.fetchDataSources();
  }

  componentDidUpdate() {
    let {xAxis, yAxis} = this.state;
    this.props.updateAxes(xAxis, yAxis);
  }

  handleChooseSource(e) {
    let idx = this.props.dataSources.findIndex(src =>
      src.title === e.target.textContent
    );

    this.setState({currentSource: e.target.textContent,
      sourceBool: true,
      sourceIndex: idx,
      sourceTable: this.props.dataSources[idx].table[0]
    });
  }

  handleDrop(idx, item) {
    let newState = merge({}, this.state);
    (idx === 0) ? newState.xAxis.push(item.attr) : newState.yAxis.push(item.attr);
    this.setState(newState);
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
              {this.props.dataSources.map((src, idx) => (
                <li key={idx}
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
        <div>
          {Object.keys(this.state.sourceTable).map((row, idx) => (
            <ChartFormAttr key={idx} attr={row}/>
          ))}
        </div>
      );
    }
  }

  render() {
    return (
      <div className="chart-form-container">
        {this.renderDropdown()}
        <h3>Attributes</h3>
        {this.renderAttributes()}
        <ChartFormDropzone zoneId="x"
          onDrop={item => this.handleDrop(0, item)}
          items={this.state.xAxis}/>
        <ChartFormDropzone zoneId="y"
          onDrop={item => this.handleDrop(1, item)}
          items={this.state.yAxis}/>
      </div>
    );
  }
}

export default DragDropContext(HTML5Backend)(ChartForm);
