import React from 'react';
import ChartItem from './chart_item';

class ChartIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchCharts();
  }

  render() {
    return (
      <div className="chart-index-container">
        <h2>Manage Charts</h2>
        <div className="chart-items-container">
          {this.props.charts.map((chart, idx) =>
            <ChartItem key={idx} chart={chart}/>
          )}
        </div>
        <p>Chart sprites created by <a href="http://www.flaticon.com/authors/maxim-basinski">Maxim Basinski</a></p>
      </div>
    );
  }
}

export default ChartIndex;
