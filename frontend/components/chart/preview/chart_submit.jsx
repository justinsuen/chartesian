import React from 'react';
import {merge} from 'lodash';
import {withRouter, hashHistory} from 'react-router';

class ChartSubmit extends React.Component {
  constructor(props) {
    super(props);

    this.state = {title: ""};

    this.handleSubmit = this.handleSubmit.bind(this);
    this.checkAttrs = this.checkAttrs.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();

    let newChart = {
      title: this.state.title,
      chart_type: this.props.chart_type,
      chart_data: this.props.chart_data,
      x_axes: this.props.x_axes,
      y_axes: this.props.y_axes,
      owner_id: this.props.owner_id
    };

    const chart = merge({}, newChart);
    this.props.createChart(chart);

    if (!this.props.errors) {
      this.props.router.push("/charts");
    }
  }

  update(field) {
    return e => this.setState({[field]: e.currentTarget.value});
  }

  renderErrors() {
    return (
      <div className="error-list">
        {this.props.errors.map((error, i) => (
          <div key={`error-${i}`} className="error-list-item">
            {error}
          </div>
        ))}
      </div>
    );
  }

  checkAttrs() {
    return (this.state.title === "") || (this.props.chart_data === undefined);
  }

  render() {
    return(
      <div className="chart-submit-form-wrap">
        {this.renderErrors()}
        <form onSubmit={this.handleSubmit} className="chart-submit-container">
          <input type="text"
            placeholder="Title"
            value={this.state.title}
            onChange={this.update("title")}
            className="chart-title"/>

          <input type="submit" className="button" value="save" disabled={this.checkAttrs()}/>
        </form>
      </div>
    );
  }
}

export default withRouter(ChartSubmit);
