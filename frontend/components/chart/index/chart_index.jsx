import React from 'react';

class ChartIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchCharts();
    debugger;
  }

  render() {
    return (
      <div className="chart-index-container">
        <h2>Manage Charts</h2>
        { this.props.charts.map((chart, idx) => <p>{chart.title}</p>) }
      </div>
    );
  }
}

export default ChartIndex;
