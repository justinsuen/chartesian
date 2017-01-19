import React from 'react';
import { PieChart, Pie, AreaChart, Area, BarChart, Bar, LineChart, Line,
        ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip,
        Legend, ResponsiveContainer } from 'recharts';
import { merge } from 'lodash';

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

    this.handleChangeType = this.handleChangeType.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidUpdate(prevProps) {
    if (this.props.xAxes.length > 0 &&
      (!(_.isEqual(this.props.xAxes, prevProps.xAxes)) ||
      !(_.isEqual(this.props.yAxes, prevProps.yAxes))
    )) {
      this.props.fetchDataSource(this.props.xAxes[0][0]);
    }
  }

  handleChangeType(e){
    e.preventDefault();
    this.setState({chartType: e.currentTarget.id});
  }

  getDesiredData(chartData) {
    let desiredData = [];
    let xAxis = this.props.xAxes[0][1];
    let yAxis = this.props.yAxes[0][1];

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
      const chartData = Object.values(this.props.dataSource.table);
      const desiredData = this.getDesiredData(chartData);
      const x = `${this.props.xAxes[0][1]}`;
      const y = `${this.props.yAxes[0][1]}`;

      switch(this.state.chartType) {
        case "line":
          return(this.lineChart(desiredData, x, y));
        case "bar":
          return(this.barChart(desiredData, x, y));
        case "area":
          return(this.areaChart(desiredData, x, y));
        case "pie":
          return(this.pieChart(desiredData, x, y));
        default:
          return(this.scatterChart(desiredData, x, y));
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

  handleSubmit(e) {
    e.preventDefault();
    const chart = merge({}, this.state);
    this.props.createChart(chart);
  }

  update(field) {
    return e => this.setState({[field]: e.currentTarget.value});
  }

  renderChartSubmit() {
    return(
      <form onSubmit={this.handleSubmit} className="chart-submit-container">
        <input type="text"
          placeholder="Title"
          value={this.state.title}
          onChange={this.update("title")}
          className="chart-title"/>

        <input type="submit" className="button" value="save"/>
      </form>
    );
  }

  render() {
    return (
      <div className="chart-preview-container">
        <h2>Chart Preview</h2>
        {this.renderChartSubmit()}
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
