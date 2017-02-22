import React from 'react';
import { withRouter } from 'react-router';

class Share extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="share-container">
        {this.props.children}
      </div>
    );
  }
}

export default withRouter(Share);
