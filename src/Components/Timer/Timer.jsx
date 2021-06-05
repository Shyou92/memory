import { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import {
  startTimer,
  stopTimer,
  counterTimer,
} from '../../redux/actionCreators';
import store from '../../redux/store';

function Timer({ cardsArray, timer, timerOn }) {
  // const [time, setTime] = useState(0);
  // const [timerOn, setTimerOn] = useState(false);

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
          onClick={() => store.dispatch(startTimer(true))}
        >
          Start
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
  };
};

const mapDispatchToProps = {
  startTimer,
  stopTimer,
  counterTimer,
};

export default connect(mapStateToProps, mapDispatchToProps)(Timer);
