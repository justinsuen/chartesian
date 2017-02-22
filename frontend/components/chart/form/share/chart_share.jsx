import React from 'react';
import {merge} from 'lodash';

class ChartShare extends React.Component {
  constructor(props) {
    super(props);

    this.state = {usernames: this.props.sharedUsers}

    this.handleSave = this.handleSave.bind(this);
    this.handleEnter = this.handleEnter.bind(this);
  }

  handleEnter(e) {
    e.preventDefault();

    if (e.key === 'Enter' && e.currentTarget.value !== '') {
      let {usernames} = this.state;
      usernames.push(e.currentTarget.value);

      this.setState({usernames});
      this.props.updateSharedUsers(usernames);

      e.currentTarget.value = "";
    }
  }

  handleSave(e) {
    e.preventDefault();

    let {usernames} = this.state;
    this.props.updateSharedUsers(usernames);
  }

  // TODO: Need to allow user to delete shares
  renderSharedUsers() {
    return (
      <div className="shared-user-list">
        {this.state.usernames.map((u, i) => (
          <p key={i} className="sul-item">
            {u}
          </p>
        ))}
      </div>
    );
  }

  render() {
    return (
      <div className="chart-form-view">
        <form onSubmit={this.handleSave} className="chart-share-form">
          <h3>Input Users</h3>
          <div className="chart-share-input-form">
            <input type="text"
              placeholder="Enter a username"
              onKeyUp={this.handleEnter}
              className="chart-share-input"/>

            { this.renderSharedUsers() }
          </div>

          <div className="chart-prev-foot">
            <input type="submit"
              className="chart-preview-btn"
              value="Save settings"/>
          </div>
        </form>
      </div>
    );
  }
}

export default ChartShare;
