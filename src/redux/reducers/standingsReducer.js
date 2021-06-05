import { TABLE_IS_OPENED, TABLE_IS_CLOSED } from '../../constants/types';

const initialState = {
  isOpened: false,
};

function standingsReducer(state = initialState, action) {
  switch (action.type) {
    case TABLE_IS_OPENED:
      return {
        ...state,
        isOpened: true,
      };
    case TABLE_IS_CLOSED:
      return {
        ...state,
        isOpened: false,
      };
    default:
      return state;
  }
}

export default standingsReducer;
