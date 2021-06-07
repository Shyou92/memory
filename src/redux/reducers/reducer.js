import { combineReducers } from 'redux';
import cardsArrayReducer from './cardsArrayReducer';
import flipReducer from './flipReducers';
import changeScoreReducer from './changeScoreReducer';
import setTimerReducer from './timerReducer';
import standingsReducer from './standingsReducer';
import startScreenReducer from './startScreenReducer';
import playerReducer from './playerReducer';
import positionReducer from './positionReducer';

export const rootReducers = combineReducers({
  cardsArrayReducer,
  flipReducer,
  changeScoreReducer,
  standingsReducer,
  startScreenReducer,
  setTimerReducer,
  playerReducer,
  positionReducer,
});
