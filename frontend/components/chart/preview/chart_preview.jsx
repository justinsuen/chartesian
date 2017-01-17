import React from 'react';
import {LineChart, BarChart, PieChart} from 'react-d3-basic';
import {Chart} from 'react-d3-core';
import * as d3 from 'd3';

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

  componentDidUpdate() {
    if (this.props.xAxes.length > 0) {
      this.props.fetchDataSource(this.props.xAxes[0][0]);
    }
  }

  renderChart() {
    if (this.props.dataSource.table) {
      const chartData = Object.values(this.props.dataSource.table);
      const chartSeries = [{
        field: 'Salary',
        name: 'Salary'
      }];
      const title = "Things";
      const width = 700;
      const height = 300;
      const x = d => d.Age;
      const xDomain = chartData.map(d => Number(d.Age));
      const y = d => Number(d);
      const yDomain = chartData.map(d => Number(d.Salary.replace(/[^0-9\.]+/g,"")));

      return(
        <Chart
          title={title}
          width={width}
          height={height}
          >
          <BarChart
            data={chartData}
            chartSeries={chartSeries}
            xScale='linear'
            x={x}
            yScale='linear'
            y={y}
            />
        </Chart>
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
