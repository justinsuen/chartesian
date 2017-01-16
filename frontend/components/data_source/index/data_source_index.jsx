import React from 'react';
import DataItem from './data_item';

class DataSourceIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchDataSources();
  }

  render() {
    return (
      <div className="data-source-index-container">
        <h2>Manage Data Sources</h2>
        <ul className="data-item-list">
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
