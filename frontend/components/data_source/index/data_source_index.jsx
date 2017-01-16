import React from 'react';
import DataItem from './data_item';

class DataSourceIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchDataSources();
  }

  componentDidUpdate() {
    this.props.fetchDataSources();
  }

  render() {
    return (
      <div className="data-source-index-container">
        <h2>Manage Data Sources</h2>
        <div className="table-container">
          <table className="table index-table">
            <thead>
              <tr>
                <td>id</td>
                <td>Title</td>
                <td>Type</td>
              </tr>
            </thead>
            <tbody>
              { this.props.dataSources.map((dataSource, idx) =>
                <DataItem
                  key={idx}
                  dataSource={dataSource}
                  deleteTodo={ this.props.deleteDataSource }
                  />
              )}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default DataSourceIndex;
