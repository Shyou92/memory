import { combineReducers } from 'redux';
import cardsArrayReducer from './cardsArrayReducer';
import flipReducer from './flipReducers';

export const rootReducers = combineReducers({
  cardsArrayReducer,
  flipReducer,
});
