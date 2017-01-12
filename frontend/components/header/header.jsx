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
      <Dropdown className="user-menu">
        <DropdownTrigger className="user-menu-icon">
          <i className="fa fa-user-circle-o"></i>
        </DropdownTrigger>
        <DropdownContent className="user-menu-content-wrap">
          <div className="user-menu-content">
            <ul className="menu-actions">
              <li className="menu-item">
                <p>Hi,&nbsp;<div className="user-menu-name">{currentUser.username}</div></p>
              </li>
              <li className="menu-item">
                <a href="/profile">Profile</a>
              </li>
              <li className="menu-item">
                <button className="header-button" onClick={logout}>Log out</button>
              </li>
            </ul>
          </div>
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
