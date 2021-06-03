import { INCREASE_SCORE_POINT } from '../../constants/types';
import { DECREASE_SCORE_POINT } from '../../constants/types';

const initialState = {
  score: 0,
};

function changeScoreReducer(state = initialState, action) {
  switch (action.type) {
    case INCREASE_SCORE_POINT:
      return {
        ...state,
        score: state.score + 10,
      };
    case DECREASE_SCORE_POINT:
      return {
        ...state,
        score: state.score - 5,
      };
    default:
      return state;
  }
}

export default changeScoreReducer;
