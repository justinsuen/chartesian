import React from 'react';

// Dropdown menu
import Dropdown from '../../dropdown/dropdown';
import DropdownTrigger from '../../dropdown/dropdown_trigger';
import DropdownContent from '../../dropdown/dropdown_content';

class ChartForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentSource: "Select a source"
    };

    this.handleChooseSource = this.handleChooseSource.bind(this);
  }

  componentDidMount() {
    this.props.fetchDataSources();
  }

  handleChooseSource(e) {
    this.setState({currentSource: e.target.textContent});
  }

  renderDropdown() {
    return(
      <Dropdown className="chart-source-menu">
        <DropdownTrigger className="current-chart-source">
          <p className="trigger">{this.state.currentSource}</p>
        </DropdownTrigger>
        <DropdownContent className="chart-source-menu-content-wrap">
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

  render() {
    return (
      <div className="chart-form-container">
        {this.renderDropdown()}
      </div>
    );
  }
}

export default ChartForm;
