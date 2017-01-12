import React from 'react';

class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (this.props.currentUser) {
      return (
        <div>
          <h1>Hello from logged in!</h1>
        </div>
      );
    } else {
      return (
        <div>
          <h1>Hello from outside!</h1>
        </div>
      );
    }
  }
}

export default Home;
