import React from 'react';
import { withRouter } from 'react-router';
import DataSourceIndexContainer from './index/data_source_index_container';

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
