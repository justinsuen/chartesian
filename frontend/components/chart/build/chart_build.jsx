import React from 'react';
import ChartFormContainer from '../form/chart_form_container';
import ChartPreview from './chart_preview';

class ChartBuild extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      xAxes: [],
      yAxes: []
    };

    this.updateAxes = this.updateAxes.bind(this);
  }

  updateAxes(xAxes, yAxes) {
    this.setState({xAxes, yAxes});
  }

  render() {
    debugger;
    let {xAxes, yAxes} = this.state;

    return (
      <div className="chart-build-container">
        <ChartFormContainer xAxes={xAxes} yAxes={yAxes} updateAxes={this.updateAxes}/>
        <ChartPreview xAxes={xAxes} yAxes={yAxes} updateAxes={this.updateAxes}/>
      </div>
    );
  }
}

export default ChartBuild;
