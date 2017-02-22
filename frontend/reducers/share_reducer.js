import {
  RECEIVE_SHARE,
  RECEIVE_IN_CHARTS,
  RECEIVE_SHARED_USERS,
  REMOVE_SHARE,
  RECEIVE_SHARE_ERRORS } from '../actions/share_actions';
import merge from 'lodash/merge';

const _nullShare = Object.freeze({
  share: {},
  shared_charts: {},
  shared_users: {},
  errors: []
});

const ShareReducer = (state = _nullShare, action) => {
  Object.freeze(state);

  switch(action.type) {
    case RECEIVE_SHARE:
      const share = action.share;
      return merge({}, state, { share });
    case RECEIVE_IN_CHARTS:
      const shared_charts = action.charts;
      return merge({}, state, { shared_charts });
    case RECEIVE_SHARED_USERS:
      const shared_users = action.users;
      return merge({}, state, { shared_users });
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
