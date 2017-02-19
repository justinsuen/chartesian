import React from 'react';
import {merge} from 'lodash';

import ChartAttrsContainer from './attrs/chart_attrs_container.jsx';

class ChartForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      view: "Axes"
    }

    this.handleChangeView = this.handleChangeView.bind(this);
  }

  handleChangeView(e) {
    this.setState({
      view: e.target.name
    });
  }

  renderView() {
    if (this.state.view === "Axes") {
      return(
        <ChartAttrsContainer
          xAxes={this.props.xAxes}
          yAxes={this.props.yAxes}
          updateAxes={this.props.updateAxes}/>
      );
    } else {
      return null;
    }
  }

  render() {
    const options = ["Axes", "Labels", "Colors", "Share"];

    return (
      <div className="chart-form-container">
        <div className="chart-form-options">
          {options.map((viewBtn, idx) => (
            <button
              key={idx}
              name={viewBtn}
              className="chart-form-view-btn"
              onClick={this.handleChangeView}>
              {viewBtn}
            </button>
          ))}
        </div>
        { this.renderView() }
      </div>
    );
  }
}

export default ChartForm;
