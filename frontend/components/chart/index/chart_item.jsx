import React from 'react';
import Modal from 'react-modal';
import ChartModalPreviewContainer from './chart_modal_preview_container';

class ChartItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false
    };

    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }

  componentWillMount() {
    Modal.setAppElement("#root");
  }

  handleOpenModal() {
    this.setState({ showModal: true });
  }

  handleCloseModal() {
    this.setState({ showModal: false });
  }

  render() {
    return(
      <div className="chart-item-preview">
        <div className="chart-item" onClick={this.handleOpenModal}>
          <p>{this.props.chart.title}</p>
          <p>{this.props.chart.chart_type}</p>
        </div>
        <Modal
           isOpen={this.state.showModal}
           contentLabel="onRequestClose Example"
           onRequestClose={this.handleCloseModal}
           shouldCloseOnOverlayClick={true}
           className="modal-content"
           overlayClassName="modal-overlay">
          <ChartModalPreviewContainer chart={this.props.chart}/>
          <button onClick={this.handleCloseModal}>Close Modal</button>
        </Modal>
      </div>
    );
  }
}

export default ChartItem;
