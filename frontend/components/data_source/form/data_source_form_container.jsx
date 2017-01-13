import React from 'react';
import { connect } from 'react-redux';
import DataSourceForm from './data_source_form.jsx';
import { createDataSource } from '../../../actions/data_source_actions';

const mapStateToProps = state => ({
  currentUser: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({
  createDataSource: dataSource => dispatch(createDataSource(dataSource))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DataSourceForm);
