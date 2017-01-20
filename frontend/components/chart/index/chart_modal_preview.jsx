import React from 'react';
import { PieChart, Pie, AreaChart, Area, BarChart, Bar, LineChart, Line,
        ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip,
        Legend, ResponsiveContainer } from 'recharts';

class ChartModalPreview extends React.Component {
  constructor(props) {
    super(props);
  }

  scatterChart(desiredData, x, y){
    return (
      <ResponsiveContainer width="90%" height="90%">
        <ScatterChart className="chart-el" margin={{top: 50, right: 50, bottom: 50, left: 50}}>
          <XAxis dataKey={x} name={x} label={x}/>
          <YAxis dataKey={y} name={y} label={y}/>
          <Scatter data={desiredData} fill="#FF9100"/>
          <CartesianGrid strokeDasharray="5 5"/>
          <Tooltip cursor={{strokeDasharray: '5 5'}}/>
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
         <CartesianGrid strokeDasharray="5 5"/>
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
          <CartesianGrid strokeDasharray="5 5"/>
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
          <CartesianGrid strokeDasharray="5 5"/>
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

  convertData(chartData, x, y) {
    let desiredData = [];

    for (let i = 0; i < chartData.length; i++) {
      let datum = chartData[i];

      if (datum[x] === undefined || datum[y] === undefined) {
        continue;
      }

      let row = {};

      if (typeof datum[x] !== "number") {
        let matches = datum[x].match(/\d+/g);
        row[x] = (matches !== null) ?
        Number(datum[x].replace(/[^0-9\.]+/g,"")) :
        datum[x];
      } else {
        row[x] = datum[x];
      }

      row[y] = (typeof datum[y] === "number") ?
        datum[y] : Number(datum[y].replace(/[^0-9\.]+/g,""));

      desiredData.push(row);
    }

    return desiredData;
  }

  renderChart() {
    const {x_axes, y_axes, chart_data, chart_type} = this.props.chart;
    const x = x_axes[0][1];
    const y = y_axes[0][1];
    const dataArray = Object.keys(chart_data).map(idx => chart_data[idx]);
    const desiredData = this.convertData(dataArray, x, y);

    switch(chart_type) {
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
  }

  render() {
    return (
      <div className="chart-modal-preview-container">
        <div className="chart-modal-header">
          <h2>Chart Preview</h2>
          <button onClick={this.props.handleClose}>
            <i className="fa fa-times"></i>
          </button>
        </div>
        <div className="chart-modal-preview">
          <h1>{this.props.chart.title}</h1>
          {this.renderChart()}
        </div>
      </div>
    );
  }
}

export default ChartModalPreview;
