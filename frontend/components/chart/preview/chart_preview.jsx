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
      const title = "Things";
      const width = 700;
      const height = 300;
      debugger;
      const x = d => d.Age;
      const xDomain = chartData.map(d => d.Age);
      const y = d => Number(d);
      const yDomain = [0, Number(d3.max(chartData, d => d.Salary))];


      return(
        <Chart
          title={title}
          width={width}
          height={height}
          >
          <BarChart
            data={chartData}
            x={x}
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
