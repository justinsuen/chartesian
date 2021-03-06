import React from 'react';
import {merge} from 'lodash';

import ChartAttrsContainer from './attrs/chart_attrs_container.jsx';
import ChartShareContainer from './share/chart_share_container.jsx';

class ChartForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      view: "Source",
      currentSource: "Select a source"
    }

    this.handleChangeView = this.handleChangeView.bind(this);
    this.updateCurrSource = this.updateCurrSource.bind(this);
  }

  handleChangeView(e) {
    $(".chart-form-view-btn.active").toggleClass("active");
    $(e.target).toggleClass("active");

    this.setState({
      view: e.target.name
    });
  }

  updateCurrSource(currentSource) {
    this.setState({
      currentSource
    });
  }

  renderView() {
    if (this.state.view === "Source") {
      return(
        <ChartAttrsContainer
          currentSource={this.state.currentSource}
          xAxes={this.props.xAxes}
          yAxes={this.props.yAxes}
          updateCurrSource={this.updateCurrSource}
          updateAxes={this.props.updateAxes}/>
      );
    } else if (this.state.view === "Share") {
      return(
        <ChartShareContainer
          sharedUsers={this.props.sharedUsers}
          updateSharedUsers={this.props.updateSharedUsers}/>
      );
    } else {
      return null;
    }
  }

  render() {
    // const options = ["Source", "Labels", "Style", "Share"];
    const options = ["Source", "Share"];

    return (
      <div className="chart-form-container">
        <div className="chart-form-options">
          {options.map((viewBtn, idx) => (
            <button
              key={idx}
              name={viewBtn}
              className={`chart-form-view-btn ${idx === 0 ? "active" : ""}`}
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
