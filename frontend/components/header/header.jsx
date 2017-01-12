import React from 'react';
import {Link} from 'react-router';

// Dropdown menu
import Dropdown from '../dropdown/dropdown';
import DropdownTrigger from '../dropdown/dropdown_trigger';
import DropdownContent from '../dropdown/dropdown_content';

class Header extends React.Component {
  sessionLinks() {
    return (
      <div className="login-signup">
        <Link to="/login" activeClassName="current">Log in</Link>
        <Link to="/signup" activeClassName="current">Sign up</Link>
      </div>
    );
  }

  headerGroup(currentUser, logout) {
    return (
      <div className="header-group">
        <Link to="/dashboards" activeClassName="current">Dashboards</Link>
        <Link to="/charts" activeClassName="current">Charts</Link>
        <Link to="/datasources" activeClassName="current">Data Sources</Link>
        {this.userOptions(currentUser, logout)}
      </div>
    );
  }

  userOptions(currentUser, logout) {
    return (
      <Dropdown>
        <DropdownTrigger>Profile</DropdownTrigger>
        <DropdownContent>
          {currentUser.username}
          <ul>
            <li>
              <a href="/profile">Profile</a>
            </li>
            <li>
              <button className="header-button" onClick={logout}>Log out</button>
            </li>
          </ul>
        </DropdownContent>
      </Dropdown>
    );
  }

  render() {
    const {currentUser, logout} = this.props;

    return (
      <div className="app-header" ref="header">
        <div className="logo">
          <h1>Chartesian</h1>
        </div>
        {currentUser
          ? this.headerGroup(currentUser, logout)
          : this.sessionLinks()}
      </div>
    );
  }
}

export default Header;
