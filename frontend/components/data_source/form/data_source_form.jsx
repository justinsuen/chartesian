import React from 'react';
import Dropzone from 'react-dropzone';
import {merge} from 'lodash';

class DataSourceForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      data_type: "",
      owner_id: "",
      data_source_url: ""
    };
  }

  onDrop() {
    console.log('Drag and drop success');
  }

  update(field) {
    return e => this.setState({[field]: e.currentTarget.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    // Need to change behavior
    const dataSource = merge({}, this.state);
    this.props.createDataSource(dataSource);
  }

  render() {
    return (
      <div className="data-form-container">
        <h2>Add Data Source</h2>
          <form onSubmit={this.handleSubmit} className="login-form-container">
            <div className="data-url-form">
              <input type="text"
                placeholder="Enter url to data source here"
                value={this.state.data_source_url}
                onChange={this.update("data_source_url")}
                className="data-url-input"/>

              <input type="submit"
                className="button"/>
            </div>
          </form>
        <Dropzone className="data-dropzone" onDrop={this.onDrop}>
          <p>Drag and drop a file here, or click to select files to upload.</p>
        </Dropzone>
      </div>
    );
  }
}

export default DataSourceForm;
