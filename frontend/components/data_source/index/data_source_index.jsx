import React from 'react';

class DataSourceIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchDataSources();
  }

  render() {
    debugger;
    return (
      <div className="data-source-index-container">
        <h2>Manage Data Sources</h2>
        <ul className="data-list">
          { this.props.dataSources.map((dataSource, idx) =>
            <DataItem
              key={idx}
              dataSource={dataSource}
              deleteTodo={ this.props.deleteDataSource }
              />
          )}
        </ul>
      </div>
    );
  }
}

export default DataSourceIndex;
