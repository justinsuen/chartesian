import React from 'react';
import { withRouter } from 'react-router';

class Chart extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="chart-container">
        {this.props.children}
      </div>
    );
  }
}

export default withRouter(Chart);
