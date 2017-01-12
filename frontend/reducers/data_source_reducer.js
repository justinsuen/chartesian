import {
  RECEIVE_DATA_SOURCE,
  RECEIVE_DATA_SOURCES,
  REMOVE_DATA_SOURCE,
  RECEIVE_ERRORS } from '../actions/data_source_actions';
import merge from 'lodash/merge';

const _nullDataSource = Object.freeze({
  dataSource: null,
  dataSources: null,
  errors: []
});

const DataSourceReducer = (state = _nullDataSource, action) => {
  Object.freeze(state);

  switch(action.type) {
    case RECEIVE_DATA_SOURCES:
      const dataSources = action.dataSources;
    case RECEIVE_DATA_SOURCE:
      const dataSource = action.dataSource;
      return merge({}, _nullDataSource, { dataSource });
    case REMOVE_DATA_SOURCE:
      return merge({}, _nullDataSource);
    case RECEIVE_ERRORS:
      const errors = action.errors;
      return merge({}, _nullDataSource, { errors });
    default:
      return state;
  }
};

export default DataSourceReducer;
