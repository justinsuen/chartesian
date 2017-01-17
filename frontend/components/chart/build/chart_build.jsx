import React from 'react';
import ChartFormContainer from '../form/chart_form_container';
import ChartPreview from './chart_preview';

class ChartBuild extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      xAxis: [],
      yAxis: []
    };

    this.updateAxes = this.updateAxes.bind(this);
  }

  updateAxes(xAxis, yAxis) {
    this.setState({xAxis, yAxis});
  }

  render() {
    debugger;
    return (
      <div className="chart-build-container">
        <ChartFormContainer updateAxes={this.updateAxes}/>
        <ChartPreview updateAxes={this.updateAxes}/>
      </div>
    );
  }
}

export default ChartBuild;
