import * as APIUtil from '../util/share_api_util';

export const RECEIVE_SHARE = "RECEIVE_SHARE";
export const RECEIVE_IN_CHARTS = "RECEIVE_IN_CHARTS";
export const RECEIVE_SHARED_USERS = "RECEIVE_SHARED_USERS";
export const REMOVE_SHARE = "REMOVE_SHARE";
export const RECEIVE_SHARE_ERRORS = "RECEIVE_SHARE_ERRORS";

// sync functions
export const receiveShare = share => ({
  type: RECEIVE_SHARE,
  share
});

export const receiveInCharts = charts => {
  return {
    type: RECEIVE_IN_CHARTS,
    charts
  };
};

export const receiveSharedUsers = users => {
  return {
    type: RECEIVE_SHARED_USERS,
    users
  };
};

export const removeShare = share => ({
  type: REMOVE_SHARE,
  share
});

export const receiveShareErrors = errors => ({
  type: RECEIVE_SHARE_ERRORS,
  errors
});

// async functions
export const fetchInShare = id => dispatch => (
  APIUtil.fetchInShare(id)
    .then(response => dispatch(receiveShare(response)),
      err => dispatch(receiveShareErrors(err.responseJSON)))
);

export const fetchInShares = () => dispatch => (
  APIUtil.fetchInShares()
    .then(response => dispatch(receiveInCharts(response)),
      err => dispatch(receiveShareErrors(err.responseJSON)))
);

export const fetchSharedUsers = chart_id => dispatch => (
  APIUtil.fetchSharedUsers(chart_id)
    .then(response => dispatch(receiveSharedUsers(response)),
      err => dispatch(receiveShareErrors(err.responseJSON)))
);

export const deleteShare = id => dispatch => (
  APIUtil.deleteShare(id)
    .then(response => dispatch(removeShare(response)),
      err => dispatch(receiveErrors(err.responseJSON)))
);

export const createShare = (sharee_id, sharer_id) => dispatch => (
  APIUtil.createShare(sharee_id, sharer_id)
    .then(response => dispatch(receiveShare(response)),
      err => dispatch(receiveShareErrors(err.responseJSON)))
);
