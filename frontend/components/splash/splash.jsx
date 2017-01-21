import React from 'react';
import {ComposedChart, Line, Area, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts';
import { withRouter } from 'react-router';

class Splash extends React.Component {
  constructor(props) {
    super(props);
  }

  renderChart() {
    const data = [{name: '2010', "FT%": 0.934, "3P%": 0.442, "3PM": 151},
              {name: '2011', "FT%": 0.809, "3P%": 0.445, "3PM": 55},
              {name: '2012', "FT%": 0.900, "3P%": 0.453, "3PM": 272},
              {name: '2013', "FT%": 0.885, "3P%": 0.424, "3PM": 261},
              {name: '2014', "FT%": 0.914, "3P%": 0.443, "3PM": 286},
              {name: '2015', "FT%": 0.908, "3P%": 0.454, "3PM": 402}];

  	return (
      <div className="sample-chart">
        <h2>Stephen Curry Over the Years</h2>
        <ComposedChart width={980} height={510} data={data}
            margin={{top: 20, right: 25, bottom: 20, left: 10}}>
          <XAxis dataKey="name"/>
          <YAxis yAxisId="left" orientation="left" dataKey="FT%" />
          <YAxis yAxisId="right" orientation="right" dataKey="3PM" />
          <Tooltip/>
          <Legend/>
          <CartesianGrid stroke='#F5F5F5' strokeDasharray="5 5"/>
          <Area yAxisId="right" type='monotone' dataKey='3PM' fill='#31C864' stroke='#31C864'/>
          <Line yAxisId="left" type='monotone' dataKey='FT%' stroke='#FF8A00' strokeWidth='2'/>
          <Bar yAxisId="left" dataKey='3P%' barSize={30} fill='#1CA600'/>
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
