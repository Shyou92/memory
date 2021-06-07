import { INCREASE_PLAYER_NUMBER } from '../../constants/types';

const initialState = {
  number: 1,
};

function increasePlayerNumber(state = initialState, action) {
  switch (action.type) {
    case INCREASE_PLAYER_NUMBER:
      return {
        ...state,
        number: action.payload.number + 1,
      };
    default:
      return state;
  }
}

export default increasePlayerNumber;
