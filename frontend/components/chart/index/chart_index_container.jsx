import React from 'react';
import { connect } from 'react-redux';

import ChartIndex from './chart_index.jsx';
import { fetchCharts } from '../../../actions/chart_actions';
import { allCharts } from '../../../reducers/selectors';

const mapStateToProps = state => {
  return {
    charts: allCharts(state.chart),
    currentUser: state.session.currentUser
  };
};

const mapDispatchToProps = dispatch => ({
  fetchCharts: () => dispatch(fetchCharts())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ChartIndex);
