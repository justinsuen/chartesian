import React from 'react';
import { withRouter } from 'react-router';

class Splash extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="home-container">
        <h2>This is Chartesian!</h2>
      </div>
    );
  }
}

export default withRouter(Splash);
