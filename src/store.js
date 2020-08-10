import { createStore } from 'redux';

import reducer from './reducers';
/* const INITIAL_VALUE = []; */

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()); 

export default store;
