import cardsArray from '../../constants/constants';
import {
  UPDATED_PLAYFIELD,
  INITIAL_STATE,
  RESET_RESULTS,
} from '../../constants/types';

let initialState = {
  cardsArray,
};

function cardsArrayReducer(state = initialState, action) {
  switch (action.type) {
    case UPDATED_PLAYFIELD: {
      return {
        ...state,
        cardsArray: state.cardsArray.filter((item) => {
          return item.isVisible !== true;
        }),
      };
    }
    case RESET_RESULTS: {
      return initialState;
    }
    default: {
      return state;
    }
  }
}

export default cardsArrayReducer;
