import { STARTSCREEN_IS_CLOSED } from '../../constants/types';

const initialState = {
  isClosed: false,
};

function closeStartScreen(state = initialState, action) {
  switch (action.type) {
    case STARTSCREEN_IS_CLOSED:
      return {
        ...state,
        isClosed: true,
      };
    default:
      return state;
  }
}

export default closeStartScreen;
