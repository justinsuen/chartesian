import React from 'react';
import DataItem from './data_item';

class DataSourceIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchDataSources();
  }

  shouldComponentUpdate(nextProps, nextState) {
    return (this.props.dataSources.length === 0) || (nextProps.dataSources.length !== this.props.dataSources.length);
  }

  componentDidUpdate() {
    this.props.fetchDataSources();
  }

  render() {
    return (
      <div className="data-source-index-container">
        <h2>Manage Data Sources</h2>
        <div className="data-index-preview">
          <div className="data-index-row header-row">
            <div className="data-row-cell cell1"><p>id</p></div>
            <div className="data-row-cell cell2"><p>Title</p></div>
            <div className="data-row-cell cell3"><p>Type</p></div>
            <div className="data-row-cell cell4"><i className="fa fa-trash-o"></i></div>
          </div>
          { this.props.dataSources.map((dataSource, idx) =>
            <DataItem
              key={idx}
              id={dataSource.id}
              index={idx}
              dataSource={dataSource}
              deleteDataSource={this.props.deleteDataSource}
              />
          )}
        </div>
      </div>
    );
  }
}

export default DataSourceIndex;
