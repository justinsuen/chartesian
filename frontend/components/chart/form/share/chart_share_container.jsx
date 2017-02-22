import React from 'react';
import { connect } from 'react-redux';

import ChartShare from './chart_share.jsx';

const mapStateToProps = state => ({
  currentUser: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ChartShare);
