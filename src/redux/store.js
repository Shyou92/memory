import { compose, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { rootReducers } from './reducers/reducer';

const store = createStore(rootReducers, compose(applyMiddleware(thunk)));

export default store;
