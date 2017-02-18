import {
  RECEIVE_SHARE,
  RECEIVE_SHARES,
  REMOVE_SHARE,
  RECEIVE_CHART_ERRORS } from '../action/share_actions';
import merge from 'lodash/merge';

const _nullShare = Object.freeze({
  share: {},
  shares: {},
  errors: []
});

const ShareReducer = (state = _nullShare, action) => {
  Object.freeze(state);

  switch(action.type) {
    case RECEIVE_CHARTS:
      const shares = action.shares;
      return merge({}, state, { shares });
    case RECEIVE_CHART:
      const share = action.share;
      return merge({}, state, { share });
    case REMOVE_CHART:
      let oldState = merge({}, state);
      delete oldState.share[action.share.id];
      return oldState;
    case RECEIVE_CHART_ERRORS:
      const errors = action.errors;
      return merge({}, { errors });
    default:
      return state;
  }
};

export default ShareReducer;
