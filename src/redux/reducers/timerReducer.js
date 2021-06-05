const initialState = {
  isOn: false,
  time: 0,
};

function timerReducer(state = initialState, action) {
  switch (action.type) {
    case 'START_TIMER':
      return {
        ...state,
        isOn: true,
        offSet: action.offSet,
        interval: action.interval,
      };
    case 'STOP_TIMER':
      return {
        ...state,
      };
    case 'TICK':
      return {
        ...state,
        time: state.time + (action.time - state.offSet),
        offSet: action.time,
      };
    default:
      return state;
  }
}

export default timerReducer;
