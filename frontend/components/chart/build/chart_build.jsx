import React from 'react';
import ChartFormContainer from '../form/chart_form_container';
import ChartPreviewContainer from '../preview/chart_preview_container';

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
    let {xAxes, yAxes} = this.state;

    return (
      <div className="chart-build-container">
        <ChartFormContainer
          xAxes={xAxes}
          yAxes={yAxes}
          updateAxes={this.updateAxes}/>
        <ChartPreviewContainer
          xAxes={xAxes}
          yAxes={yAxes}
          updateAxes={this.updateAxes}/>
      </div>
    );
  }
}

export default ChartBuild;
