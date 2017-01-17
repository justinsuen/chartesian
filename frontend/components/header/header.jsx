import React from 'react';
import {Link, hashHistory} from 'react-router';

// Dropdown menu
import Dropdown from '../dropdown/dropdown';
import DropdownTrigger from '../dropdown/dropdown_trigger';
import DropdownContent from '../dropdown/dropdown_content';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.handleLogout = this.handleLogout.bind(this);
  }

  sessionLinks() {
    return (
      <div className="login-signup">
        <Link to="/login" activeClassName="current">Log in</Link>
        <Link to="/signup" activeClassName="current">Sign up</Link>
      </div>
    );
  }

  headerGroup(currentUser) {
    return (
      <div className="header-group">
        <Link to="/dashboards">Dashboards</Link>
        <Link to="/charts">Charts</Link>
        <Link to="/data_sources">Data Sources</Link>
        {this.userOptions(currentUser)}
      </div>
    );
  }

  userOptions(currentUser) {
    return (
      <Dropdown className="user-menu">
        <DropdownTrigger className="user-menu-icon">
          <i className="fa fa-user-circle-o trigger"></i>
        </DropdownTrigger>
        <DropdownContent className="user-menu-content-wrap">
          <div className="user-menu-content">
            <ul className="menu-actions">
              <li className="menu-item">
                <p>Hi,{'\u00A0'}<strong className="user-menu-name">{currentUser.username}</strong></p>
              </li>
              <li className="menu-item">
                <Link to="/profile">Profile</Link>
              </li>
              <li className="menu-item">
                <button className="header-button" onClick={this.handleLogout}>Log out</button>
              </li>
            </ul>
          </div>
        </DropdownContent>
      </Dropdown>
    );
  }

  handleLogout() {
    this.props.logout().then(() => hashHistory.push('/'));
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
