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

  render() {
    return (
      <div className="share-index-container">
        <h2>Resources Shared with You</h2>
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

export default withRouter(ShareIndex);
