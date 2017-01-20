import React from 'react';
import { withRouter } from 'react-router';

class Splash extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="home-container">
        <div className="splash-text">
          <h2>When Descartes makes Charts... they're Chartesian.</h2>
          <p>Chartesian provides a simple solution for all charting purposes.</p>
        </div>
        <div className="splash-chart">
          <img src={require('../../../app/assets/images/laptop-background.png')}/>
        </div>
      </div>
    );
  }
}

export default withRouter(Splash);
