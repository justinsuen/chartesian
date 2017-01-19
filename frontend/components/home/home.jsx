import React from 'react';

class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="home-container">
        <h2>Welcome back, {`${this.props.currentUser.username}`}</h2>
      </div>
    );
  }
}

export default Home;
