import React from 'react';

class DataSourceIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchDataSources();
    debugger;
  }

  render() {
    debugger;
    return (
      <div className="data-source-index-container">
        <h2>Manage Data Sources</h2>
      </div>
    );
  }
}

export default DataSourceIndex;
