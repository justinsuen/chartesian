import * as APIUtil from '../util/data_source_api_util';

export const RECEIVE_DATA_SOURCE = "RECEIVE_DATA_SOURCE";
export const RECEIVE_DATA_SOURCES = "RECEIVE_DATA_SOURCES";
export const REMOVE_DATA_SOURCE = "REMOVE_DATA_SOURCE";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";

// sync functions
export const receiveDataSource = data_source => ({
  type: RECEIVE_DATA_SOURCE,
  dataSource: data_source
});

export const receiveDataSources = data_sources => {
  return {
  type: RECEIVE_DATA_SOURCES,
  dataSources: data_sources
};};

export const removeDataSource = data_source => ({
  type: REMOVE_DATA_SOURCE,
  dataSource: data_source
});

export const receiveErrors = errors => ({
  type: RECEIVE_ERRORS,
  errors
});

// async functions
export const fetchDataSource = id => dispatch => (
  APIUtil.fetchDataSource(id)
    .then(response => dispatch(receiveDataSource(response)),
      err => dispatch(receiveErrors(err.responseJSON)))
);

export const fetchDataSources = () => dispatch => {
  return(
  APIUtil.fetchDataSources()
    .then(response => dispatch(receiveDataSources(response)),
      err => dispatch(receiveErrors(err.responseJSON)))
    );
};

export const deleteDataSource = id => dispatch => (
  APIUtil.fetchDataSource(id)
    .then(response => dispatch(removeDataSource(response)),
      err => dispatch(receiveErrors(err.responseJSON)))
);

export const createDataSource = dataSource => dispatch => (
  APIUtil.createDataSource(dataSource)
    .then(response => dispatch(receiveDataSource(response)),
      err => dispatch(receiveErrors(err.responseJSON)))
);
