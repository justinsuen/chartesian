import React from 'react';
import {ComposedChart, Line, Area, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts';
import { withRouter } from 'react-router';

class Splash extends React.Component {
  constructor(props) {
    super(props);
  }

  renderChart() {
    const data = [{name: 'Page A', uv: 590, pv: 800, amt: 1400},
              {name: 'Page B', uv: 868, pv: 967, amt: 1506},
              {name: 'Page C', uv: 1397, pv: 1098, amt: 989},
              {name: 'Page D', uv: 1480, pv: 1200, amt: 1228},
              {name: 'Page E', uv: 1520, pv: 1108, amt: 1100},
              {name: 'Page F', uv: 1400, pv: 680, amt: 1700}];

  	return (
      <div className="sample-chart">
        <ComposedChart width={980} height={540} data={data}
            margin={{top: 20, right: 20, bottom: 20, left: 20}}>
          <XAxis dataKey="name"/>
          <YAxis />
          <Tooltip/>
          <Legend/>
          <CartesianGrid stroke='#f5f5f5' strokeDasharray="5 5"/>
          <Area type='monotone' dataKey='amt' fill='#8884d8' stroke='#8884d8'/>
          <Bar dataKey='pv' barSize={40} fill='#413ea0'/>
          <Line type='monotone' dataKey='uv' stroke='#ff7300'/>
       </ComposedChart>
      </div>
    );
  }

  render() {
    return (
      <div className="home-container">
        <div className="splash-text">
          <h2>When Descartes makes Charts... they're <strong>Chartesian</strong></h2>
          <p>Chartesian provides a simple charting solution.</p>
          <a href="https://www.github.com/justinsuen/chartesian">Learn More.</a>
        </div>
        <div className="splash-chart">
          {this.renderChart()}
          <img src={require('../../../app/assets/images/laptop-background.png')}/>
        </div>
      </div>
    );
  }
}

export default withRouter(Splash);
