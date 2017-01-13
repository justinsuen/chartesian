import React from 'react';
import Dropzone from 'react-dropzone';

class DataSourceForm extends React.Component {
  constructor(props) {
    super(props);
  }

  onDrop() {
    console.log('Drag and drop success');
  }

  render() {
    return (
      <div className="data-form-container">
        <h2>Add Data Source</h2>
        <Dropzone className="data-dropzone" onDrop={this.onDrop}>
          <p>Drag and drop a file here, or click to select files to upload.</p>
        </Dropzone>
      </div>
    );
  }
}

export default DataSourceForm;
