import {
  INITIAL_STATE,
  FLIP_CARD_TO_CLOSED,
  FLIP_CARD_TO_OPENED,
  FLIP_CARD_ADD_TO_CHECK,
  UPDATED_PLAYFIELD,
  INCREASE_SCORE_POINT,
  DECREASE_SCORE_POINT,
  START_TIMER,
  TICK,
  STOP_TIMER,
} from '../constants/types';
import store from '../redux/store';

export function initialCardsArray(isVisibleState, cardId) {
  return {
    type: INITIAL_STATE,
    payload: {
      id: cardId,
      isVisible: isVisibleState,
    },
  };
}

export function flippedToOpened(isVisibleState, cardId) {
  return {
    type: FLIP_CARD_TO_OPENED,
    payload: {
      id: cardId,
      isVisible: isVisibleState,
    },
  };
}

export function addCardToCheckState(isVisibleState, color, cardId) {
  return {
    type: FLIP_CARD_ADD_TO_CHECK,
    payload: {
      id: cardId,
      isVisible: isVisibleState,
      color,
    },
  };
}

export function flippedToClosed(isVisibleState, cardId) {
  return {
    type: FLIP_CARD_TO_CLOSED,
    payload: {
      id: cardId,
      isVisible: isVisibleState,
    },
  };
}

export function flippedToClosedInFewSeconds(isVisibleState, cardId) {
  store.dispatch(flippedToClosed(isVisibleState, cardId));
}

export function updatePlayfield(card) {
  return (dispatch) => {
    return setTimeout(
      () =>
        dispatch({
          type: UPDATED_PLAYFIELD,
          payload: {
            card: card,
          },
        }),
      2000
    );
  };
}

export function increaseScore(scoreState) {
  return (dispatch) => {
    return setTimeout(() => {
      dispatch({
        type: INCREASE_SCORE_POINT,
        payload: {
          score: scoreState,
        },
      });
    }, 1000);
  };
}

export function decreaseScore(scoreState) {
  return (dispatch) => {
    return setTimeout(() => {
      dispatch({
        type: DECREASE_SCORE_POINT,
        payload: {
          score: scoreState,
        },
      });
    }, 1000);
  };
}

export function startTimer() {
  return setInterval(() => {
    return {
      type: START_TIMER,
      payload: {
        offset: Date.now(),
      },
    };
  });
}

export function timerTick() {
  return (dispatch) => {
    return setInterval(() => {
      dispatch({
        type: TICK,
        payload: {
          time: Date.now(),
        },
      });
    });
  };
}

export function stopTimer() {
  return (dispatch) => {
    return dispatch({
      type: STOP_TIMER,
    });
  };
}
