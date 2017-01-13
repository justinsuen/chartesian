import React from 'react';
import Dropzone from 'react-dropzone';
import request from 'superagent';
import {merge} from 'lodash';

const CLOUDINARY_UPLOAD_PRESET = 'x4oxzcre';
const CLOUDINARY_UPLOAD_URL = 'https://api.cloudinary.com/v1_1/chartesian/upload';

class DataSourceForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      data_type: "",
      owner_id: this.props.currentUser.id,
      data_source_url: ""
    };

    this.onDrop = this.onDrop.bind(this);
  }

  onDrop(files) {
    console.log('Drag and drop success');
    this.setState({
      uploadedFile: files[0],

      //Testing
      data_source_url: "successful_drop"
    });

    $(".data-dropzone").hide();

    // Comment out when making UI things
    // this.handleUpload(files[0]);
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
      }
    });
  }

  dataUploadZone() {
    const acceptedTypes = "application/json,text/tsv,text/csv";

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

  dataPreview() {
    if (this.state.data_source_url !== '') {
      $(".data-dropzone-container").hide();
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

  update(field) {
    return e => this.setState({[field]: e.currentTarget.value});
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
                placeholder="data source name"
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
            value={text}/>
        </div>
      </form>
    );
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
