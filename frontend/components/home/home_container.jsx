import React from 'react';
import { connect } from 'react-redux';
import Home from './home.jsx';

const mapStateToProps = state => ({
  currentUser: state.session.currentUser
});

export default connect(
  mapStateToProps,
  null
)(Home);
