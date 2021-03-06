import React from 'react';
import { withRouter } from 'react-router';

class DataSource extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="data-source-container">
        {this.props.children}
      </div>
    );
  }
}

export default withRouter(DataSource);
