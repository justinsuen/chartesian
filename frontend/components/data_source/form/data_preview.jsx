import React from 'react';

class DataPreview extends React.Component {
  constructor(props) {
    super(props);
    this.readFile = this.readFile.bind(this);
    this.processFile = this.processFile.bind(this);
  }

  readFile(file) {
    let reader = new FileReader();
    reader.onload = e => {
      const text = e.target.result;
      this.processFile(text, file.type);
    };
    reader.readAsText(file);
  }

  processFile(text, type) {
    let table = [];
    let delim = "";

    if (type === "text/csv") {
      delim = ",";
    } else if (type === "text/tab-separated-values") {
      delim = "\t";
    }

    if (delim === "") {
      const jsonText = JSON.parse(text);
      const maxRow = Math.min(100, jsonText.length);
      const headers = Object.keys(jsonText[0]);
      table.push(headers);

      for (let i = 0; i < maxRow; i++) {
        let currLine = jsonText[i];
        let rowData = [];

        for (let j = 0; j < headers.length; j++) {
          rowData.push(currLine[headers[j]]);
        }
        table.push(rowData);
      }
    } else {
      const allTextLines = text.split(/\r\n|\n/);
      const maxRow = Math.min(100, allTextLines.length);

      for (let i = 0; i < maxRow; i++) {
        let currLine = allTextLines[i].split(delim);
        let rowData = [];

        for (let j = 0; j < currLine.length; j++) {
          rowData.push(currLine[j]);
        }
        table.push(rowData);
      }
    }

    this.previewTable(table);
  }

  previewTable(table) {
    let html = '<table class="table">';
    let count = 0;
    const totalCols = table[0].length;

    for (let i = 0; i < table.length; i++) {
      html += ((i === 0) ? '<thead>' : '<tr>');
      for (let j = 0; j < totalCols; j++) {
        html += '<td>' + table[i][j] + '</td>';
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
