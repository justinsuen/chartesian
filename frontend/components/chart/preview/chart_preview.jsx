import React from 'react';
import {VictoryScatter} from 'victory';

class ChartPreview extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      chartType: "",
      chartJson: {},
      xAxes: [],
      yAxes: []
    };
  }

  componentDidUpdate(prevProps) {
    if (this.props.xAxes.length > 0 &&
      (!(_.isEqual(this.props.xAxes, prevProps.xAxes)) ||
      !(_.isEqual(this.props.yAxes, prevProps.yAxes))
    )) {
      this.props.fetchDataSource(this.props.xAxes[0][0]);
    }
  }

  getDesiredData(chartData) {
    let desiredData = [];

    for (let i = 0; i < chartData.length; i++) {
      let xAxis = this.props.xAxes[0][1];
      let yAxis = this.props.yAxes[0][1];
      let datum = chartData[i];
      let row = {};
      row[xAxis] = datum[xAxis];
      row[yAxis] = Number(datum[yAxis].replace(/[^0-9\.]+/g,""));
      desiredData.push(row);
    }

    return desiredData;
  }

  renderChart() {
    if (this.props.dataSource.table) {
      const chartData = Object.values(this.props.dataSource.table);
      const desiredData = this.getDesiredData(chartData);

      return(
        <VictoryScatter
          data={desiredData}
          x={`${this.props.xAxes[0][1]}`}
          y={`${this.props.yAxes[0][1]}`}
        />
      );
    } else {
      return(<h1>Not available!</h1>);
    }
  }

  render() {
    return (
      <div className="chart-preview-container">
        <h2>Preview goes here!</h2>
        {this.renderChart()}
      </div>
    );
  }
}

export default ChartPreview;
