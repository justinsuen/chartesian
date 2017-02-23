import React from 'react';
import {withRouter} from 'react-router';
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

  renderCharts() {
    if (this.props.charts.length !== 0) {
      return (
        <div className="chart-items-container">
          {this.props.charts.map((chart, idx) =>
            <ChartItem key={idx} chart={chart}/>
          )}
        </div>
      );
    } else {
      return (
        <div className="chart-items-container no-charts">
          <h2>You haven't made a chart yet!</h2>
        </div>
      )
    }
  }

  render() {
    return (
      <div className="chart-index-container">
        <h2>Manage Charts</h2>
        { this.renderCharts() }
        <div className="footer">
          <p>Chart sprites created by <a href="http://www.flaticon.com/authors/maxim-basinski">Maxim Basinski</a></p>
        </div>
      </div>
    );
  }
}

export default withRouter(ChartIndex);
