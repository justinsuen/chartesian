import React from 'react';
import { Link } from 'react-router';

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
        <p className="header-name">{currentUser.username}</p>
        <button className="header-button" onClick={logout}>Log out</button>
    	</div>
    );
  }

  render(){
    const { currentUser, logout } = this.props;

    return (
      currentUser ? this.headerGroup(currentUser, logout) : this.sessionLinks()
    );
  }
}

export default Header;
