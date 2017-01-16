import React from 'react';

class DataItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let dataSource = this.props.dataSource;

    return (
      <tr className="data-item">
        <td>{dataSource.id}</td>
        <td>{dataSource.title}</td>
        <td>{dataSource.data_type}</td>
      </tr>
    );
  }
}

export default DataItem;
