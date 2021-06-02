import cardsArray from '../../constants/constants';
import { UPDATED_PLAYFIELD } from '../../constants/types';

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
    default: {
      return state;
    }
  }
}

export default cardsArrayReducer;
