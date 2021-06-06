import { ADD_PLAYER_NAME } from '../../constants/types';

const initialState = {
  name: '',
};

function playerReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_PLAYER_NAME:
      return {
        ...state,
        name: action.payload.name,
      };
    default:
      return state;
  }
}

export default playerReducer;
