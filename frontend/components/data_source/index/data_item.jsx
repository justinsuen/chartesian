import React from 'react';

class DataItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let dataSource = this.props.dataSource;

    return (
      <li className="data-item">
        <p>Things go here.</p>
      </li>
    );
  }
}

export default DataItem;
