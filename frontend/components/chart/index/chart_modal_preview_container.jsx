import React from 'react';
import { connect } from 'react-redux';

import ChartModalPreview from './chart_modal_preview.jsx';
import { fetchDataSource } from '../../../actions/data_source_actions';

const mapDispatchToProps = dispatch => ({
  fetchDataSource: id => dispatch(fetchDataSource(id))
});

export default connect(
  null,
  mapDispatchToProps
)(ChartModalPreview);
