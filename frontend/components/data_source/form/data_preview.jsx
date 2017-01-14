import React from 'react';
import {parseCSV} from '../../../util/util_func';

class DataPreview extends React.Component {
  constructor(props) {
    super(props);
    this.getCSVText.bind(this);
  }

  getCSVText() {
    debugger;
    // const fileText = parseCSV(this.props.file, 5, 5);
    // return fileText;
  }

  previewTable() {

  }

  render() {
    return(
      <div className="data-preview-container">
        <h3>Data Preview</h3>
        <div className="data-preview">
          <p>Preview of data goes here!</p>
          {this.getCSVText()}
        </div>
      </div>
    );
  }
}

export default DataPreview;
