import React from 'react';
import * as V from 'victory';

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

    for (let i = 0; i < chartData.length; i++) {
      let xAxis = this.props.xAxes[0][1];
      let yAxis = this.props.yAxes[0][1];
      let datum = chartData[i];

      if (datum[xAxis] === undefined || datum[yAxis] === undefined) {
        continue;
      }

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
      const x = `${this.props.xAxes[0][1]}`;
      const y = `${this.props.yAxes[0][1]}`;

      switch(this.state.chartType) {
        case "line":
          return(<V.VictoryLine data={desiredData} x={x} y={y}/>);
        case "bar":
          return(<V.VictoryBar data={desiredData} x={x} y={y}/>);
        case "area":
          return(<V.VictoryArea data={desiredData} x={x} y={y}/>);
        case "pie":
          return(<V.VictoryPie data={desiredData} x={x} y={y}/>);
        default:
          return(<V.VictoryScatter data={desiredData} x={x} y={y}/>);
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
