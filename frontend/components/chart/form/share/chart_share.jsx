import React from 'react';
import {merge} from 'lodash';

class ChartShare extends React.Component {
  constructor(props) {
    super(props);

    this.state = {usernames: this.props.sharedUsers}

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

  // TODO: Need to allow user to delete shares
  renderSharedUsers() {
    if (this.state.usernames.length !== 0) {
      return (
        <div className="shared-user-list">
          {this.state.usernames.map((u, i) => (
            <p key={i} className="sul-item">
              {u}
            </p>
          ))}
        </div>
      );
    } else {
      return (
        <div className="shared-user-list no-user">
          <h3>This chart is not shared with anyone!</h3>
        </div>
      )
    }
  }

  render() {
    return (
      <div className="chart-form-view">
        <form className="chart-share-form">
          <h3>Input Users</h3>
          <div className="chart-share-input-form">
            <input type="text"
              placeholder="Enter a username"
              onKeyUp={this.handleEnter}
              className="chart-share-input"/>

            { this.renderSharedUsers() }
          </div>
        </form>
      </div>
    );
  }
}

export default ChartShare;
