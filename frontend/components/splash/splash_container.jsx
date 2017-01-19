import React from 'react';
import { connect } from 'react-redux';
import Splash from './splash.jsx';

const mapStateToProps = state => ({
  currentUser: state.session.currentUser
});

export default connect(
  mapStateToProps,
  null
)(Splash);
