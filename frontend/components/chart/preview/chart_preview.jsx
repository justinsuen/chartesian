import React from 'react';
import { PieChart, Pie, AreaChart, Area, BarChart, Bar, LineChart, Line,
        ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip,
        Legend, ResponsiveContainer } from 'recharts';
import { merge } from 'lodash';
import ChartSubmitContainer from './chart_submit_container';

class ChartPreview extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      chart_type: "scatter",
      chart_data: []
    };

    this.handleChangeType = this.handleChangeType.bind(this);
  }

  componentDidUpdate(prevProps) {
    if (this.props.xAxes.length > 0 &&
      (!(_.isEqual(this.props.xAxes, prevProps.xAxes)) ||
      !(_.isEqual(this.props.yAxes, prevProps.yAxes))
    )) {
      this.props.fetchDataSource(this.props.xAxes[0][0]);
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.dataSource.table) {
      const chartData = Object.keys(nextProps.dataSource.table).map(key =>
        nextProps.dataSource.table[key]
      );
      let desiredData = this.getDesiredData(chartData);

      this.setState({
        chart_data: desiredData
      });
    }
  }

  handleChangeType(e){
    e.preventDefault();
    this.setState({chart_type: e.currentTarget.id});
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
    if (this.state.chart_data.length > 0) {
      const x = `${this.props.xAxes[0][1]}`;
      const y = `${this.props.yAxes[0][1]}`;

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
    let owner_id = "";
    if (this.props.currentUser) {
      owner_id = this.props.currentUser.id;
    }

    return (
      <div className="chart-preview-container">
        <h2>Chart Preview</h2>
        <ChartSubmitContainer
          chart_type={this.state.chart_type}
          chart_data={this.state.chart_data}
          xAxes={this.props.xAxes}
          yAxes={this.props.yAxes}
          owner_id={owner_id}
          sharedUsers={this.props.sharedUsers}/>
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
