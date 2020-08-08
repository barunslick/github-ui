import * as repoActions from '../actions/repoActions';

const INITIAL_STATE = {
  reposData: [],
};

/**
 * Performs action based on given payload ,i.e fetched data from an api and returns new state.
 *
 * @param {Object} state Current State.
 * @param {String} action Takes the action that has been dispatched.
 * @returns
 */
function reposActionReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case repoActions.SET_REPOS:
      return {
        ...state,
        reposData: action.payload
      };

    default:
      return state;
  }
}

export default reposActionReducer;
