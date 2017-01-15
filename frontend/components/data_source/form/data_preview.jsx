import React from 'react';
import {parseCSV} from '../../../util/util_func';

class DataPreview extends React.Component {
  constructor(props) {
    super(props);
    this.readFile = this.readFile.bind(this);
    this.loadHandler = this.loadHandler.bind(this);
    this.processFile = this.processFile.bind(this);
  }

  readFile(file) {
    var reader = new FileReader();
    reader.onload = this.loadHandler(file.type);
    reader.readAsText(file);
  }

  loadHandler(type) {
    return e => {
      const text = e.target.result;
      this.processFile(text, type);
    };
  }

  processFile(text, type) {
    const allTextLines = text.split(/\r\n|\n/);
    let lines = [];
    let delim = "";

    if (type === "text/csv") {
      delim = ",";
    } else if (type === "text/tab-separated-values") {
      delim = "\t";
    }

    if (delim === "") {
      // JSON not supported yet...
      const arr = Object.values(text);
      console.log(arr);
    } else {
      for (let i = 0; i < allTextLines.length; i++) {
        let data = allTextLines[i].split(delim);
        let tarr = [];

        for (let j = 0; j < data.length; j++) {
          tarr.push(data[j]);
        }
        lines.push(tarr);
      }
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
