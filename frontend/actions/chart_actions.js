import * as APIUtil from '../util/chart_api_util';

export const RECEIVE_CHART = "RECEIVE_CHART";
export const RECEIVE_CHARTS = "RECEIVE_CHARTS";
export const REMOVE_CHART = "REMOVE_CHART";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";
export const CLEAR_SOURCE = "CLEAR_SOURCE";

// sync functions
export const receiveChart = chart => ({
  type: RECEIVE_CHART,
  chart
});

export const receiveCharts = charts => {
  return {
  type: RECEIVE_CHARTS,
  charts
};};

export const removeChart = chart => ({
  type: REMOVE_CHART,
  chart
});

export const receiveErrors = errors => ({
  type: RECEIVE_ERRORS,
  errors
});

export const clearSource = () => ({
  type: CLEAR_SOURCE
});

// async functions
export const fetchChart = id => dispatch => (
  APIUtil.fetchChart(id)
    .then(response => dispatch(receiveChart(response)),
      err => dispatch(receiveErrors(err.responseJSON)))
);

export const fetchCharts = () => dispatch => (
  APIUtil.fetchCharts()
    .then(response => dispatch(receiveCharts(response)),
      err => dispatch(receiveErrors(err.responseJSON)))
);

export const deleteChart = id => dispatch => (
  APIUtil.deleteChart(id)
    .then(response => dispatch(removeChart(response)),
      err => dispatch(receiveErrors(err.responseJSON)))
);

export const createChart = chart => dispatch => (
  APIUtil.createChart(chart)
    .then(response => dispatch(receiveChart(response)),
      err => dispatch(receiveErrors(err.responseJSON)))
    .then(() => dispatch(clearSource()))
);
