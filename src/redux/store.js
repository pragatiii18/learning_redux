import { legacy_createStore as createStore } from 'redux';
import thunk from 'redux-thunk';
import { applyMiddleware, compose } from 'redux';
import reducers from './reducers';
//import { reducers } from './reducers';
//import reducers from './reducers/index'


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)));

export default store;