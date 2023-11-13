// store.js
import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import thunk from 'redux-thunk';
import rootReducer from './root-reducer';
import { fetchProducts } from './product/actions';

// Antes de criar a store, despache a ação para buscar os produtos
const preloadedState = {};
const store = createStore(rootReducer, preloadedState, applyMiddleware(thunk, logger));
store.dispatch(fetchProducts());

export default store;
