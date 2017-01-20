import React from 'react';
import { PieChart, Pie, AreaChart, Area, BarChart, Bar, LineChart, Line,
        ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip,
        Legend, ResponsiveContainer } from 'recharts';
import { merge } from 'lodash';
import ChartSubmit from './chart_submit';

class ChartPreview extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      chart_type: "scatter",
      chart_data: [],
    };

    this.handleChangeType = this.handleChangeType.bind(this);
  }

  componentDidUpdate(prevProps) {
    if (this.props.x_axes.length > 0 &&
      (!(_.isEqual(this.props.x_axes, prevProps.x_axes)) ||
      !(_.isEqual(this.props.y_axes, prevProps.y_axes))
    )) {
      this.props.fetchDataSource(this.props.x_axes[0][0]);
    }
  }

  componentWillReceiveProps(nextProps) {
    let desiredData;

    if (nextProps.dataSource.table) {
      const chartData = Object.keys(nextProps.dataSource.table).map(key =>
        nextProps.dataSource.table[key]
      );
      desiredData = this.getDesiredData(chartData);
    }

    this.setState({
      chart_data: desiredData
    });
  }

  handleChangeType(e){
    e.preventDefault();
    this.setState({chart_type: e.currentTarget.id});
  }

  getDesiredData(chartData) {
    let desiredData = [];
    let xAxis = this.props.x_axes[0][1];
    let yAxis = this.props.y_axes[0][1];

    for (let i = 0; i < chartData.length; i++) {
      let datum = chartData[i];

      if (datum[xAxis] === undefined || datum[yAxis] === undefined) {
        continue;
      }

      let row = {};

      if (typeof datum[xAxis] !== "number") {
        let matches = datum[xAxis].match(/\d+/g);
        row[xAxis] = (matches !== null) ?
        Number(datum[xAxis].replace(/[^0-9\.]+/g,"")) :
        datum[xAxis];
      } else {
        row[xAxis] = datum[xAxis];
      }

      row[yAxis] = (typeof datum[yAxis] === "number") ?
        datum[yAxis] : Number(datum[yAxis].replace(/[^0-9\.]+/g,""));

      desiredData.push(row);
    }

    desiredData.sort((a, b) => {
      if (a[xAxis] < b[xAxis]) {
        return -1;
      } else if (a[xAxis] > b[xAxis]) {
        return 1;
      } else {
        return 0;
      }
    });

    return desiredData;
  }

  scatterChart(desiredData, x, y){
    return (
      <ResponsiveContainer width="90%" height="90%">
        <ScatterChart className="chart-el" margin={{top: 50, right: 50, bottom: 50, left: 50}}>
          <XAxis dataKey={x} name={x} label={x}/>
          <YAxis dataKey={y} name={y} label={y}/>
          <Scatter data={desiredData} fill="#FF9100"/>
          <CartesianGrid/>
          <Tooltip cursor={{strokeDasharray: '3 3'}}/>
        </ScatterChart>
      </ResponsiveContainer>
    );
  }

  lineChart(desiredData, x, y){
    return (
      <ResponsiveContainer width="90%" height="90%">
        <LineChart className="chart-el" data={desiredData} margin={{top: 50, right: 50, bottom: 50, left: 50}}>
         <XAxis dataKey={x} label={x}/>
         <YAxis label={y}/>
         <CartesianGrid strokeDasharray="3 3"/>
         <Tooltip/>
         <Legend/>
         <Line type="monotone" dataKey={y} stroke="#FF9100" activeDot={{r: 8}}/>
        </LineChart>
      </ResponsiveContainer>
    );
  }

  barChart(desiredData, x, y){
    return (
      <ResponsiveContainer width="90%" height="90%">
        <BarChart className="chart-el" data={desiredData}
                margin={{top: 50, right: 50, bottom: 50, left: 50}}>
          <XAxis dataKey={x} label={x}/>
          <YAxis label={y}/>
          <CartesianGrid strokeDasharray="3 3"/>
          <Tooltip/>
          <Legend/>
          <Bar dataKey={y} fill="#FF9100"/>
        </BarChart>
      </ResponsiveContainer>
    );
  }

  areaChart(desiredData, x, y){
    return (
      <ResponsiveContainer width="90%" height="90%">
        <AreaChart className="chart-el" data={desiredData}
                margin={{top: 50, right: 50, bottom: 50, left: 50}}>
          <XAxis dataKey={x} label={x}/>
          <YAxis label={y}/>
          <CartesianGrid strokeDasharray="3 3"/>
          <Tooltip/>
          <Area type='monotone' dataKey={y} stroke="#FF9100" fill="#FF9100"/>
        </AreaChart>
      </ResponsiveContainer>
    );
  }

  pieChart(desiredData, x, y){
    return (
      <ResponsiveContainer width="90%" height="90%">
        <PieChart className="chart-el">
          <Pie data={desiredData} nameKey={x} valueKey={y} fill="#FF9100"/>
          <Tooltip/>
        </PieChart>
      </ResponsiveContainer>
    );
  }

  renderChart() {
    if (this.props.dataSource.table) {
      const x = `${this.props.x_axes[0][1]}`;
      const y = `${this.props.y_axes[0][1]}`;

      switch(this.state.chart_type) {
        case "line":
          return(this.lineChart(this.state.chart_data, x, y));
        case "bar":
          return(this.barChart(this.state.chart_data, x, y));
        case "area":
          return(this.areaChart(this.state.chart_data, x, y));
        case "pie":
          return(this.pieChart(this.state.chart_data, x, y));
        default:
          return(this.scatterChart(this.state.chart_data, x, y));
      }
    } else {
      return(<h3>Preview not available</h3>);
    }
  }

  renderChartBtns() {
    return(
      <div className="chart-buttons">
        <button id="scatter" onClick={this.handleChangeType}><i className="flaticon-scatter"></i></button>
        <button id="line" onClick={this.handleChangeType}><i className="flaticon-line"></i></button>
        <button id="area" onClick={this.handleChangeType}><i className="flaticon-area"></i></button>
        <button id="bar" onClick={this.handleChangeType}><i className="flaticon-bar"></i></button>
        <button id="pie" onClick={this.handleChangeType}><i className="flaticon-pie"></i></button>
      </div>
    );
  }

  render() {
    return (
      <div className="chart-preview-container">
        <h2>Chart Preview</h2>
        <ChartSubmit
          chart_type={this.state.chart_type}
          chart_data={this.state.chart_data}
          x_axes={this.props.x_axes}
          y_axes={this.props.y_axes}
          chartable_type={"User"}
          chartable_id={this.props.currentUser.id}
          createChart={this.props.createChart}/>
        <div className="chart-preview">
          {this.renderChart()}
        </div>
        <div className="chart-options">
          {this.renderChartBtns()}
        </div>
        <div className="chart-footer">
          <p>Chart button icons designed by <a href="http://www.freepik.com/">Freepik</a></p>
        </div>
      </div>
    );
  }
}

export default ChartPreview;
