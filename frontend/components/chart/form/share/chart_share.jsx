import React from 'react';
import {merge} from 'lodash';

class ChartShare extends React.Component {
  constructor(props) {
    super(props);

    this.handleSave = this.handleSave.bind(this);
  }

  handleSave(e) {
    e.preventDefault();

    let {xAxes, yAxes} = this.state;
    this.props.updateAxes(xAxes, yAxes);
  }

  render() {
    return (
      <div className="chart-form-view">
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

export default ChartShare;
