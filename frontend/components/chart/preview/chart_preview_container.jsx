import React from 'react';
import { connect } from 'react-redux';

import ChartPreview from './chart_preview.jsx';
import { fetchDataSources } from '../../../actions/data_source_actions';
import { allDataSources } from '../../../reducers/selectors';

const mapStateToProps = state => ({
  dataSources: allDataSources(state.source),
  currentUser: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({
  fetchDataSources: () => dispatch(fetchDataSources())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ChartPreview);
