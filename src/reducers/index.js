import { combineReducers } from 'redux';

import profileActionReducers from './profileActionReducers';

const reducer = combineReducers({
  fetch: profileActionReducers
});

export default reducer;
