import React from 'react';
import ChartFormContainer from '../form/chart_form_container';
import ChartPreview from './chart_preview';

class ChartBuild extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="chart-build-container">
        <h1>Build a chart here!</h1>
        <ChartFormContainer />
        <ChartPreview />
      </div>
    );
  }
}

export default ChartBuild;
