import React from 'react';
import {parseCSV} from '../../../util/util_func';

class DataPreview extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props);
  }

  render() {
    return(
      <div className="data-preview-container">
        <h3>Data Preview</h3>
        <div className="data-preview">
          <p>Preview of data goes here!</p>
        </div>
      </div>
    );
  }
}

export default DataPreview;
