import {
  RECEIVE_SHARE,
  RECEIVE_SHARES,
  REMOVE_SHARE,
  RECEIVE_SHARE_ERRORS } from '../actions/share_actions';
import merge from 'lodash/merge';

const _nullShare = Object.freeze({
  share: {},
  shares: {},
  errors: []
});

const ShareReducer = (state = _nullShare, action) => {
  Object.freeze(state);

  switch(action.type) {
    case RECEIVE_SHARES:
      const shares = action.shares;
      return merge({}, state, { shares });
    case RECEIVE_SHARE:
      const share = action.share;
      return merge({}, state, { share });
    case REMOVE_SHARE:
      let oldState = merge({}, state);
      delete oldState.share[action.share.id];
      return oldState;
    case RECEIVE_SHARE_ERRORS:
      const errors = action.errors;
      return merge({}, { errors });
    default:
      return state;
  }
};

export default ShareReducer;
