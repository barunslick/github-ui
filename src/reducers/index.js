import { combineReducers } from 'redux';

import profileActionReducers from './profileActionReducers';
import reposActionReducers from './reposActionReducers.js';

const reducer = combineReducers({
  fetch: profileActionReducers,
  repos: reposActionReducers,
});

export default reducer;
