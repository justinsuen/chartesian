import React from 'react';
import {merge} from 'lodash';

class ChartSubmit extends React.Component {
  constructor(props) {
    super(props);

    this.state = {title: ""};

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();

    let newChart = {
      title: this.state.title,
      chart_type: this.props.chart_type,
      chart_data: this.props.chart_data,
      x_axes: this.props.x_axes,
      y_axes: this.props.y_axes
    };

    debugger;
    const chart = merge({}, newChart);
    this.props.createChart(chart);
  }

  update(field) {
    return e => this.setState({[field]: e.currentTarget.value});
  }

  render() {
    return(
      <form onSubmit={this.handleSubmit} className="chart-submit-container">
        <input type="text"
          placeholder="Title"
          value={this.state.title}
          onChange={this.update("title")}
          className="chart-title"/>

        <input type="submit" className="button" value="save"/>
      </form>
    );
  }
}

export default ChartSubmit;
