import React from 'react';
import { connect } from 'react-redux';

import ChartPreview from './chart_preview.jsx';
import { createChart } from '../../../actions/chart_actions';
import { fetchDataSource } from '../../../actions/data_source_actions';

const mapStateToProps = state => {
  return {
    dataSource: state.source.dataSource,
    currentUser: state.session.currentUser
  };
};

const mapDispatchToProps = dispatch => ({
  fetchDataSource: id => dispatch(fetchDataSource(id)),
  createChart: chart => dispatch(createChart(chart))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ChartPreview);
