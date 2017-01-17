import React from 'react';
import { connect } from 'react-redux';

import ChartBuild from './chart_build.jsx';

const mapStateToProps = state => ({
  currentUser: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ChartBuild);
