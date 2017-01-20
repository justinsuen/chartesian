import React from 'react';

class ChartItem extends React.Component {
  render() {
    return(
      <div className="chart-item">
        <p>{this.props.chart.title}</p>
        <p>{this.props.chart.chart_type}</p>
      </div>
    );
  }
}

export default ChartItem;
