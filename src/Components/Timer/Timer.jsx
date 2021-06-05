import { useEffect } from 'react';
import { connect } from 'react-redux';
import {
  stopTimer,
  counterTimer,
  openStartScreen,
  initialCardsArray,
} from '../../redux/actionCreators';
import store from '../../redux/store';

function Timer({
  cardsArray,
  timer,
  timerOn,
  initialCardsArray,
  cardsArrayFromState,
}) {
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
        <button
          className='timer__stopWatch'
          onClick={() => store.dispatch(openStartScreen(false))}
        >
          Restart
        </button>
      </h2>
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    cardsArray: state.cardsArrayReducer.cardsArray,
    timer: state.setTimerReducer.time,
    timerOn: state.setTimerReducer.timerOn,
    isClosed: state.startScreenReducer.isClosed,
  };
};

const mapDispatchToProps = {
  stopTimer,
  counterTimer,
  openStartScreen,
  initialCardsArray,
};

export default connect(mapStateToProps, mapDispatchToProps)(Timer);
