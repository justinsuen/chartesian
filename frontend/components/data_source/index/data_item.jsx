import React from 'react';
import Collapse from 'react-collapse';

class DataItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isOpened: false};
    this.handleClick = this.handleClick.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    this.setState({isOpened: !this.state.isOpened});
  }

  handleDelete(e) {
    e.preventDefault();
    this.props.deleteDataSource(this.props.id);
  }

  renderDataPreview() {
    const {table, id} = this.props.dataSource;
    const totalCols = table[0].length;

    return(
      <div className="table-wrap">
        <table className="table">
          <thead>
            <tr>
              {Object.keys(table[0]).map((item, idx) => <td key={idx}>{item}</td>)}
            </tr>
          </thead>
          <tbody>
            {Object.keys(table).map(idx => (
              <tr key={idx}>
                {Object.keys(table[idx]).map((item, itemInd) =>
                  <td key={itemInd}>{table[idx][item]}</td>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }

  render() {
    let dataSource = this.props.dataSource;

    return (
      <div className="data-index-wrap">
        <div className="data-index-row" onClick={this.handleClick}>
          <div className="data-row-cell cell1"><p>{this.props.index+1}</p></div>
          <div className="data-row-cell cell2"><p>{dataSource.title}</p></div>
          <div className="data-row-cell cell3"><p>{dataSource.data_type}</p></div>
          <div className="data-row-cell cell4" onClick={this.handleDelete}>
            <i className="fa fa-trash"></i>
          </div>
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
