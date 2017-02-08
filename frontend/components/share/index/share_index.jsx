import React from 'react';
import {withRouter} from 'react-router';

class ShareIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="share-index-container">
        <h2>Resources Shared with You</h2>
      </div>
    );
  }
}

export default withRouter(ShareIndex);
