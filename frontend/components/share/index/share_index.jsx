import React from 'react';
import {withRouter} from 'react-router';
import ChartItem from '../../chart/index/chart_item';

class ShareIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchInCharts();
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
          <h2>Nobody shared anything with you yet!</h2>
        </div>
      )
    }
  }

  render() {
    return (
      <div className="share-index-container">
        <h2>Shared with Me</h2>
        { this.renderCharts() }
        <div className="footer">
          <p>Chart sprites created by <a href="http://www.flaticon.com/authors/maxim-basinski">Maxim Basinski</a></p>
        </div>
      </div>
    );
  }
}

export default withRouter(ShareIndex);
