import * as profileActions from '../actions/profileActions';

const INITIAL_STATE = {
  data: {},
  followers: {},
  following: {}
};

/**
 * Performs action based on given payload ,i.e fetched data from an api and returns new state.
 *
 * @param {Object} state Current State.
 * @param {String} action Takes the action that has been dispatched.
 * @returns
 */
function profileActionReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case profileActions.SET_DATA:
      return {
        ...state,
        data: action.payload
      };

    case profileActions.SET_FOLLOWING:
      return {
        ...state,
        following: action.payload
      };

    case profileActions.SET_FOLLOWERS:
      return {
        ...state,
        followers: action.payload
      };

    default:
      return state;
  }
}

export default profileActionReducer;
