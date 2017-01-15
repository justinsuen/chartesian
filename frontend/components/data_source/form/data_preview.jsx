import React from 'react';
import {parseCSV} from '../../../util/util_func';

class DataPreview extends React.Component {
  constructor(props) {
    super(props);
    this.readFile = this.readFile.bind(this);
    this.loadHandler = this.loadHandler.bind(this);
    this.processCSV = this.processCSV.bind(this);
  }

  readFile(file) {
    var reader = new FileReader();
    reader.onload = this.loadHandler;
    reader.readAsText(file);
  }

  loadHandler(e) {
    const csv = e.target.result;
    this.processCSV(csv);
  }

  processCSV(csv) {
    const allTextLines = csv.split(/\r\n|\n/);
    let lines = [];

    for (let i = 0; i < allTextLines.length; i++) {
      let data = allTextLines[i].split(',');
      let tarr = [];

      for (let j = 0; j < data.length; j++) {
        tarr.push(data[j]);
      }
      lines.push(tarr);
    }
    this.previewTable(lines);
  }

  previewTable(lines) {
    let html = '<table class="table">';
    let count = 0;
    const totalCols = lines[0].length;

    for (let i = 0; i < lines.length; i++) {
      html += ((i === 0) ? '<thead>' : '<tr>');
      for (let j = 0; j < totalCols; j++) {
        html += '<td>' + lines[i][j] + '</td>';
      }
      html += ((i === 0) ? '</thead>' : '</tr>');
    }
    html += '</table>';

    $('#data-preview').append(html);
  }

  render() {
    return (
      <div className="data-preview-container">
        <h3>Data Preview</h3>
        <div id="data-preview" className="data-preview">
          {this.readFile(this.props.file)}
        </div>
      </div>
    );
  }
}

export default DataPreview;
