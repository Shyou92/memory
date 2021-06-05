import { combineReducers } from 'redux';
import cardsArrayReducer from './cardsArrayReducer';
import flipReducer from './flipReducers';
import changeScoreReducer from './changeScoreReducer';

export const rootReducers = combineReducers({
  cardsArrayReducer,
  flipReducer,
  changeScoreReducer,
});
