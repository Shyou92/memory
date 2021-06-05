import { combineReducers } from 'redux';
import cardsArrayReducer from './cardsArrayReducer';
import flipReducer from './flipReducers';
import changeScoreReducer from './changeScoreReducer';
import timerReducer from './timerReducer';

export const rootReducers = combineReducers({
  cardsArrayReducer,
  flipReducer,
  changeScoreReducer,
  timerReducer,
});
