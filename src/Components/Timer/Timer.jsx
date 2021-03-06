import { useEffect } from 'react';
import { connect } from 'react-redux';
import { stopTimer, counterTimer } from '../../redux/actionCreators';
import store from '../../redux/store';

function Timer({ cardsArray, timer, timerOn }) {
  useEffect(() => {
    let interval = null;
    if (timerOn) {
      interval = setInterval(() => {
        store.dispatch(counterTimer(timer));
      }, 1000);
    } else {
      clearInterval(interval);
    }
    return () => {
      clearInterval(interval);
    };
  }, [timer, timerOn]);

  useEffect(() => {
    if (cardsArray.length === 0) {
      store.dispatch(stopTimer(false));
    }
  }, [cardsArray.length]);
  return (
    <>
      <h2 className='header__text header__text_timer'>
        <span>{'0' + Math.floor((timer / 60) % 60)}:</span>
        <span>{('0' + Math.floor(timer % 60)).slice(-2)}</span>
      </h2>
    </>
  );
}

const mapStateToProps = (state) => {
  const stateCardsArray = state.cardsArrayReducer.cardsArray;
  const stateTimer = state.setTimerReducer.time;
  const stateTimerOn = state.setTimerReducer.timerOn;
  const stateIsClosed = state.startScreenReducer.isClosed;
  return {
    cardsArray: stateCardsArray,
    timer: stateTimer,
    timerOn: stateTimerOn,
    isClosed: stateIsClosed,
  };
};

const mapDispatchToProps = {
  stopTimer,
  counterTimer,
};

export default connect(mapStateToProps, mapDispatchToProps)(Timer);
