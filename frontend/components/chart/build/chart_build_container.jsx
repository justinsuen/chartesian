import React from 'react';
import { connect } from 'react-redux';

import ChartBuild from './chart_build.jsx';
import { createChart } from '../../../actions/chart_actions';

const mapStateToProps = state => ({
  currentUser: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({
  createChart: chart => dispatch(createChart(chart))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ChartBuild);
