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
      <ul>
        {items.map((item, idx) => <li key={idx}>{item}</li>)}
      </ul>
    );
  }

  render() {
    const { connectDropTarget, isOver, items } = this.props;

    return connectDropTarget(
      <div className="chart-form-dropzone" style={{position: 'relative'}}>
        {this.buildItems(items)}
        {isOver &&
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            height: '100%',
            width: '100%',
            zIndex: 1,
            opacity: 0.5,
            backgroundColor: 'white',
          }} />
        }
      </div>
    );
  }
}

ChartFormDropzone.propTypes = {
  isOver: PropTypes.bool.isRequired
};

export default DropTarget("chartFormAttr", dropzoneTarget, collect)(ChartFormDropzone);
