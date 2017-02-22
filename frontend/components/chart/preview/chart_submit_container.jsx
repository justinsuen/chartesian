import React from 'react';
import { connect } from 'react-redux';

import ChartSubmit from './chart_submit.jsx';
import { createChart } from '../../../actions/chart_actions';
import { createShare } from '../../../actions/share_actions';

const mapStateToProps = state => ({
  errors: state.chart.errors
});

const mapDispatchToProps = dispatch => ({
  createChart: chart => dispatch(createChart(chart)),
  createShare: (username, sharer_id) => dispatch(createShare(username, sharer_id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ChartSubmit);
