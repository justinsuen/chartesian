import React from 'react';
import {merge} from 'lodash';
import {hashHistory} from 'react-router';

import Dropzone from 'react-dropzone';
import request from 'superagent';

import DataPreview from './data_preview';

const CLOUDINARY_UPLOAD_PRESET = 'x4oxzcre';
const CLOUDINARY_UPLOAD_URL = 'https://api.cloudinary.com/v1_1/chartesian/upload';

class DataSourceForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      data_type: "csv",
      owner_id: this.props.currentUser.id,
      data_source_url: ""
    };

    this.onDrop = this.onDrop.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  onDrop(files) {
    if (files[0] !== undefined) {
      console.log('Drag and drop success');
      this.setState({
        uploadedFile: files[0],
        data_source_url: "file_dropped"
      });
    } else {
      console.log("Not supported!");
      files = [];
    }
  }

  update(field) {
    return e => this.setState({[field]: e.currentTarget.value});
  }

  handleUpload(file) {
    let upload = request.post(CLOUDINARY_UPLOAD_URL)
                        .field('upload_preset', CLOUDINARY_UPLOAD_PRESET)
                        .field('file', file);

    upload.end((err, response) => {
      if (err) {
        console.error(err);
      }

      if (response.body.secure_url !== '') {
        this.setState({
          data_source_url: response.body.secure_url
        });

        const {title, data_type, owner_id, data_source_url} = this.state;
        this.props.createDataSource({title, data_type, owner_id, data_source_url});
        hashHistory.push("/data_sources");
      }
    });
  }

  dataUploadZone() {
    const acceptedTypes = "application/json,text/tab-separated-values,text/csv";

    return(
      <div className="data-dropzone-container">
        <h3>Upload Data</h3>
        <Dropzone className="data-dropzone"
          multiple={false}
          accept={acceptedTypes}
          onDrop={this.onDrop}>
          <p>Drag and drop a file here, or click to select files to upload.</p>
        </Dropzone>
      </div>
    );
  }

  update(field) {
    return e => this.setState({[field]: e.currentTarget.value});
  }

  checkInput() {
    const {title, data_type, data_source_url} = this.state;
    return (!title || !data_type || !data_source_url);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.handleUpload(this.state.uploadedFile);
  }

  dataInfoForm() {
    const text = (this.state.data_source_url === "") ? "Waiting for data below..." : "Save data source";

    return(
      <form onSubmit={this.handleSubmit} className="data-info-form-container">
        <h3>Data Source Information</h3>
        <div className="data-info-form">
          <div className="data-info-fields">
            <label>
              Title{'\u00A0'}
              <input type="text"
                placeholder="Enter data source name"
                value={this.state.title}
                onChange={this.update("title")}
                className="data-input"/>
            </label>

            <label>
              Type{'\u00A0'}
              <select value={this.state.data_type}
                onChange={this.update("data_type")}
                className="data-input">
                <option value="csv">CSV</option>
                <option value="tsv">TSV</option>
                <option value="json">JSON</option>
              </select>
            </label>
          </div>

          <input type="submit"
						className="button"
            disabled={this.checkInput()}
            value={text}/>
        </div>
      </form>
    );
  }

  dataPreview() {
    if (this.state.uploadedFile !== undefined) {
      $(".data-dropzone-container").hide();
      return(
        <DataPreview file={this.state.uploadedFile} />
      );
    }
  }

  render() {
    return (
      <div className="data-form-container">
        <h2>Add Data Source</h2>
        {this.dataInfoForm()}
        {this.dataUploadZone()}
        {this.dataPreview()}
      </div>
    );
  }
}

// Handle URL submitting - bonus
// <form onSubmit={this.handleURLSubmit} className="login-form-container">
//   <div className="data-url-form">
//     <input type="text"
//       placeholder="Enter url to data source here"
//       value={this.state.data_source_url}
//       onChange={this.update("data_source_url")}
//       className="data-url-input"/>
//
//     <input type="submit"
//       className="button"/>
//   </div>
// </form>

export default DataSourceForm;
