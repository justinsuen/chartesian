import React from 'react';
import { withRouter } from 'react-router';

class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  greeting() {
    if (this.props.currentUser) {
      return `, ${this.props.currentUser.username}`;
    }
  }

  render() {
    return (
      <div className="home-container">
        <h2>Welcome back{this.greeting()}</h2>
      </div>
    );
  }
}

export default withRouter(Home);
