import React from 'react';
import { PieChart, Pie, AreaChart, Area, BarChart, Bar, LineChart, Line,
        ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip,
        Legend, ResponsiveContainer } from 'recharts';

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
      row[xAxis] = Number(datum[xAxis].replace(/[^0-9\.]+/g,""));
      row[yAxis] = Number(datum[yAxis].replace(/[^0-9\.]+/g,""));
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
      <ResponsiveContainer width="80%" height="80%">
        <ScatterChart className="chart-el" margin={{top: 20, right: 20, bottom: 20, left: 20}}>
          <XAxis dataKey={x} name={x} unit='cm'/>
          <YAxis dataKey={y} name={y} unit='kg'/>
          <Scatter name='A school' data={desiredData} fill='#8884d8'/>
          <CartesianGrid />
          <Tooltip cursor={{strokeDasharray: '3 3'}}/>
        </ScatterChart>
      </ResponsiveContainer>
    );
  }

  lineChart(desiredData, x, y){
    return (
      <ResponsiveContainer width="80%" height="80%">
        <LineChart className="chart-el" data={desiredData} margin={{top: 5, right: 30, left: 20, bottom: 5}}>
         <XAxis dataKey={x}/>
         <YAxis/>
         <CartesianGrid strokeDasharray="3 3"/>
         <Tooltip/>
         <Legend />
         <Line type="monotone" dataKey={y} stroke="#8884d8" activeDot={{r: 8}}/>
        </LineChart>
      </ResponsiveContainer>
    );
  }

  barChart(desiredData, x, y){
    return (
      <ResponsiveContainer width="80%" height="80%">
        <BarChart className="chart-el" data={desiredData}
                margin={{top: 5, right: 30, left: 20, bottom: 5}}>
          <XAxis dataKey={x}/>
          <YAxis/>
          <CartesianGrid strokeDasharray="3 3"/>
          <Tooltip/>
          <Legend />
          <Bar dataKey={y} fill="#8884d8" />
        </BarChart>
      </ResponsiveContainer>
    );
  }

  areaChart(desiredData, x, y){
    return (
      <ResponsiveContainer width="80%" height="80%">
      <AreaChart className="chart-el" data={desiredData}
              margin={{top: 10, right: 30, left: 0, bottom: 0}}>
        <XAxis dataKey={x}/>
        <YAxis/>
        <CartesianGrid strokeDasharray="3 3"/>
        <Tooltip/>
        <Area type='monotone' dataKey={y} stroke='#8884d8' fill='#8884d8' />
      </AreaChart>
    </ResponsiveContainer>
    );
  }

  pieChart(desiredData, x, y){
    return (
      <ResponsiveContainer width="80%" height="80%">
        <PieChart className="chart-el">
          <Pie data={desiredData} nameKey={x} valueKey={y} fill="#8884d8" label/>
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

  render() {
    return (
      <div className="chart-preview-container">
        <h2>Chart Preview</h2>
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
