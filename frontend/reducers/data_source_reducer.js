import {
  RECEIVE_DATA_SOURCE,
  RECEIVE_DATA_SOURCES,
  REMOVE_DATA_SOURCE,
  RECEIVE_ERRORS } from '../actions/data_source_actions';
import merge from 'lodash/merge';

const _nullDataSource = Object.freeze({
  dataSource: {},
  dataSources: {},
  errors: []
});

const DataSourceReducer = (state = _nullDataSource, action) => {
  Object.freeze(state);

  switch(action.type) {
    case RECEIVE_DATA_SOURCES:
      const dataSources = action.dataSources;
      return merge({}, _nullDataSource, { dataSources });
    case RECEIVE_DATA_SOURCE:
      const dataSource = action.dataSource;
      return merge({}, state, { dataSource });
    case REMOVE_DATA_SOURCE:
      let oldState = merge({}, state);
      delete oldState.source[action.dataSource.id];
      return oldState;
    case RECEIVE_ERRORS:
      const errors = action.errors;
      return merge({}, _nullDataSource, { errors });
    default:
      return state;
  }
};

export default DataSourceReducer;
