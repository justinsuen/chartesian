import {
  RECEIVE_CHART,
  RECEIVE_CHARTS,
  REMOVE_CHART,
  RECEIVE_ERRORS } from '../actions/chart_actions';
import merge from 'lodash/merge';

const ChartReducer = (state = {}, action) => {
  Object.freeze(state);

  switch(action.type) {
    case RECEIVE_CHARTS:
      const charts = action.charts;
      return merge({}, state, { charts });
    case RECEIVE_CHART:
      const chart = action.chart;
      return merge({}, state, { chart });
    case REMOVE_CHART:
      let oldState = merge({}, state);
      delete oldState.chart[action.chart.id];
      return oldState;
    case RECEIVE_ERRORS:
      const errors = action.errors;
      return merge({}, { errors });
    default:
      return state;
  }
};

export default ChartReducer;
