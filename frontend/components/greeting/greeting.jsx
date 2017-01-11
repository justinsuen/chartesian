import React from 'react';
import { Link } from 'react-router';

const sessionLinks = () => (
  <div className="login-signup">
    <Link to="/login" activeClassName="current">Log in</Link>
    <Link to="/signup" activeClassName="current">Sign up</Link>
  </div>
);

const personalGreeting = (currentUser, logout) => (
	<div className="header-group">
    <p className="header-name">{currentUser.username}</p>
    <button className="header-button" onClick={logout}>Log out</button>
	</div>
);

const Greeting = ({ currentUser, logout }) => (
  currentUser ? personalGreeting(currentUser, logout) : sessionLinks()
);

export default Greeting;
