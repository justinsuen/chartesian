import * as APIUtil from '../util/data_source_api_util';

export const RECEIVE_DATA_SOURCE = "RECEIVE_DATA_SOURCE";
export const RECEIVE_DATA_SOURCES = "RECEIVE_DATA_SOURCES";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";

// sync functions
export const receiveDataSource = dataSource => ({
  type: RECEIVE_DATA_SOURCE,
  dataSource
});

export const receiveDataSources = dataSources => ({
  type: RECEIVE_DATA_SOURCES,
  dataSources
});

export const receiveErrors = errors => ({
  type: RECEIVE_ERRORS,
  errors
});

// async functions
export const fetchDataSource = id => dispatch => (
  APIUtil.fetchDataSource(id)
    .then(dataSource => dispatch(receiveDataSource(dataSource)),
      err => dispatch(receiveErrors(err.responseJSON)))
);

export const fetchDataSources = () => dispatch => (
  APIUtil.fetchDataSources()
    .then(dataSources => dispatch(receiveDataSources(dataSources)),
      err => dispatch(receiveErrors(err.responseJSON)))
);
