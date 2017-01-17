import React, { Component, PropTypes } from 'react';
import { DragSource } from 'react-dnd';

const attrSource = {
  beginDrag(props) {
    return {};
  }
};

function collect(connect, monitor) {
  return {
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging()
  };
}

class ChartFormAttr extends Component {
  render() {
    const { connectDragSource, isDragging } = this.props;
    return connectDragSource(
      <div className="chart-form-attr">
        {this.props.attr}
      </div>
    );
  }
}

ChartFormAttr.propTypes = {
  connectDragSource: PropTypes.func.isRequired,
  isDragging: PropTypes.bool.isRequired
};

export default DragSource("chartFormAttr", attrSource, collect)(ChartFormAttr);
