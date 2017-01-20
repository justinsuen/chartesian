import React from 'react';
import { connect } from 'react-redux';

import ChartSubmit from './chart_submit.jsx';
import { createChart } from '../../../actions/chart_actions';
import { fetchDataSource } from '../../../actions/data_source_actions';

const mapStateToProps = state => ({
  errors: state.chart.errors
});

const mapDispatchToProps = dispatch => ({
  createChart: chart => dispatch(createChart(chart))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ChartSubmit);
