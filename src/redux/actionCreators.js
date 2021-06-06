import {
  FLIP_CARD_TO_CLOSED,
  FLIP_CARD_TO_OPENED,
  FLIP_CARD_ADD_TO_CHECK,
  UPDATED_PLAYFIELD,
  INCREASE_SCORE_POINT,
  DECREASE_SCORE_POINT,
  TIMER_IS_ON,
  TIMER_IS_OFF,
  START_TIMER,
  TABLE_IS_OPENED,
  TABLE_IS_CLOSED,
  STARTSCREEN_IS_OPENED,
  STARTSCREEN_IS_CLOSED,
  ADD_PLAYER_NAME,
} from '../constants/types';
import store from '../redux/store';

// export function initialCardsArray(cardsArray) {
//   return {
//     type: INITIAL_STATE,
//     payload: {
//       cardsArray,
//     },
//   };
// }

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

export function startTimer(timerState) {
  return {
    type: TIMER_IS_ON,
    payload: {
      timerOn: timerState,
    },
  };
}

export function stopTimer(timerState) {
  return {
    type: TIMER_IS_OFF,
    payload: {
      timerOn: timerState,
    },
  };
}

export function counterTimer(currentTime) {
  return {
    type: START_TIMER,
    payload: {
      time: currentTime,
    },
  };
}

export function openTable(tableState) {
  return {
    type: TABLE_IS_OPENED,
    payload: {
      isOpened: tableState,
    },
  };
}

export function closeTable(tableState) {
  return {
    type: TABLE_IS_CLOSED,
    payload: {
      isOpened: tableState,
    },
  };
}

export function openStartScreen(startScreenState) {
  return {
    type: STARTSCREEN_IS_OPENED,
    payload: {
      isClosed: startScreenState,
    },
  };
}

export function closeStartScreen(startScreenState) {
  return {
    type: STARTSCREEN_IS_CLOSED,
    payload: {
      isClosed: startScreenState,
    },
  };
}

export function addPlayerName(playerName) {
  return {
    type: ADD_PLAYER_NAME,
    payload: {
      name: playerName,
    },
  };
}

// export function resetResults() {
//   return {
//     type: RESET_RESULTS,
//     payload: {
//       name: '',
//       time: 0,
//       score: 0,
//       cardsArray: console.log(cardsArray),
//     },
//   };
// }
