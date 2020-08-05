export const SET_DATA = 'SET_DATA';
export const SET_FOLLOWING = 'SET_FOLLOWING';
export const SET_FOLLOWERS = 'SET_FOLLOWERS';

export const setData = jsonData => ({
  type: SET_DATA,
  payload: jsonData
});

export const setFollowing = jsonData => ({
  type: SET_FOLLOWING,
  payload: jsonData
});

export const setFollowers = jsonData => ({
  type: SET_FOLLOWERS,
  payload: jsonData
});

