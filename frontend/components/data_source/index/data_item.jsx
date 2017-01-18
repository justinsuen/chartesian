import React from 'react';
import Collapse from 'react-collapse';

class DataItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isOpened: false};
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    this.setState({isOpened: !this.state.isOpened});
  }

  renderDataPreview() {
    const {table, id} = this.props.dataSource;
    const totalCols = table[0].length;
    // debugger;

    return(
      <table class="table">
        <thead>
          {Object.keys(table[0]).map(item => <td>{item}</td>)}
        </thead>
        {Object.keys(table).map(idx => (
          <tr>
            {Object.keys(table[idx]).map(item =><td>{table[idx][item]}</td>)}
          </tr>
        ))}
      </table>
    );
  }

  render() {
    let dataSource = this.props.dataSource;

    return (
      <div className="data-index-wrap">
        <div className="data-index-row" onClick={this.handleClick}>
          <div className="data-row-cell cell1"><p>{dataSource.id}</p></div>
          <div className="data-row-cell cell2"><p>{dataSource.title}</p></div>
          <div className="data-row-cell cell3"><p>{dataSource.data_type}</p></div>
          <div className="data-row-cell cell4"><button><i className="fa fa-trash"></i></button></div>
        </div>
        <Collapse isOpened={this.state.isOpened}
          className="data-item-preview">
          {this.renderDataPreview()}
        </Collapse>
      </div>
    );
  }
}

export default DataItem;
