import { TIMER_IS_ON, START_TIMER, TIMER_IS_OFF } from '../../constants/types';

const initialState = {
  time: 0,
  timerOn: false,
};

function setTimerReducer(state = initialState, action) {
  switch (action.type) {
    case TIMER_IS_ON:
      return {
        ...state,
        timerOn: true,
      };
    case START_TIMER:
      return {
        ...state,
        time: state.time + 1,
      };
    case TIMER_IS_OFF:
      return {
        ...state,
        timerOn: false,
      };
    default:
      return state;
  }
}

export default setTimerReducer;
