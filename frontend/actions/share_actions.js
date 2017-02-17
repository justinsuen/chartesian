import * as APIUtil from '../util/share_api_util';

export const RECEIVE_SHARE = "RECEIVE_SHARE";
export const RECEIVE_SHARES = "RECEIVE_SHARES";
export const REMOVE_SHARE = "REMOVE_SHARE";
export const RECEIVE_SHARE_ERRORS = "RECEIVE_ERRORS";

// sync functions
export const receiveShare = share => ({
  type: RECEIVE_SHARE,
  share
});

export const receiveShares = shares => {
  return {
  type: RECEIVE_SHARES,
  shares
};};

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
    .then(response => dispatch(receiveShares(response)),
      err => dispatch(receiveShareErrors(err.responseJSON)))
);

export const deleteChart = id => dispatch => (
  APIUtil.deleteShare(id)
    .then(response => dispatch(removeShare(response)),
      err => dispatch(receiveErrors(err.responseJSON)))
);

export const createChart = sharee_id => dispatch => (
  APIUtil.createShare(sharee_id)
    .then(response => dispatch(receiveShare(response)),
      err => dispatch(receiveShareErrors(err.responseJSON)))
);
