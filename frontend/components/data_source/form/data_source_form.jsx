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
      uploadedFile: files[0]
    });

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

  dataPreview() {
    if (this.state.data_source_url !== '') {
      $(".data-dropzone").hide();
      return(
        <div className="data-preview">
          <p>Display some text...</p>
        </div>
      );
    }
  }

  render() {
    const acceptedTypes = "application/json,text/tsv,text/csv";

    return (
      <div className="data-form-container">
        <h2>Add Data Source</h2>
        <Dropzone className="data-dropzone"
          multiple={false}
          accept={acceptedTypes}
          onDrop={this.onDrop}>
          <p>Drag and drop a file here, or click to select files to upload.</p>
        </Dropzone>
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
