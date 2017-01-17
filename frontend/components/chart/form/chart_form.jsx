import React from 'react';

// Dropdown menu
import Dropdown from '../../dropdown/dropdown';
import DropdownTrigger from '../../dropdown/dropdown_trigger';
import DropdownContent from '../../dropdown/dropdown_content';

class ChartForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentSource: "Select a source",
      sourceBool: false,
      sourceIndex: null
    };

    this.handleChooseSource = this.handleChooseSource.bind(this);
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
      sourceIndex: idx
    });
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
      let {dataSources} = this.props;
      let {sourceIndex} = this.state;
      let dsTableObj = dataSources[sourceIndex].table[0];

      return(
        <ul>
          {Object.keys(dsTableObj).map((row, idx) => (
            <li key={idx}>{row}</li>
          ))}
        </ul>
      );
    }
  }

  render() {
    return (
      <div className="chart-form-container">
        {this.renderDropdown()}
        <h3>Attributes</h3>
        {this.renderAttributes()}
      </div>
    );
  }
}

export default ChartForm;
