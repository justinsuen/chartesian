import React from 'react';
import ChartItem from './chart_item';

class ChartIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchCharts();
  }

  componentWillReceiveProps(nextProps) {
    if ((this.props.charts.length === 0) || (nextProps.charts.length !== this.props.charts.length)) {
      this.props.fetchCharts();
    }
  }

  // shouldComponentUpdate(nextProps, nextState) {
  //   return (this.props.charts.length === 0) || (nextProps.charts.length !== this.props.charts.length);
  // }

  render() {
    return (
      <div className="chart-index-container">
        <h2>Manage Charts</h2>
        <div className="chart-items-container">
          {this.props.charts.map((chart, idx) =>
            <ChartItem key={idx} chart={chart}/>
          )}
        </div>
        <div className="footer">
          <p>Chart sprites created by <a href="http://www.flaticon.com/authors/maxim-basinski">Maxim Basinski</a></p>
        </div>
      </div>
    );
  }
}

export default ChartIndex;
