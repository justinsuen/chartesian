import React, { Component, PropTypes } from 'react';
import { DropTarget } from 'react-dnd';

const dropzoneTarget = {
  drop(props, monitor) {
    props.onDrop(monitor.getItem());
  }
};

function collect(connect, monitor) {
  return {
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver()
  };
}

class ChartFormDropzone extends Component {
  buildItems(items) {
    return (
      <ul className="chosen-attr-list">
        {items.map((item, idx) =>
          <li key={idx} className="chosen-attr">
            {`${item[1]}`}
          </li>
        )}
      </ul>
    );
  }

  render() {
    const { connectDropTarget, isOver, items } = this.props;
    let text = (this.props.zoneId === "x") ?
      "Drag and drop an attribute" : "Drag and drop one or more attributes";

    return connectDropTarget(
      <div className="chart-form-dropzone">
        <p>{text}</p>
        {this.buildItems(items)}
        {isOver && <div className="overlay"/>}
      </div>
    );
  }
}

ChartFormDropzone.propTypes = {
  isOver: PropTypes.bool.isRequired
};

export default DropTarget("chartFormAttr", dropzoneTarget, collect)(ChartFormDropzone);
