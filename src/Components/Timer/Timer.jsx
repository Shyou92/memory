import { useState, useEffect } from 'react';
import { connect } from 'react-redux';

function Timer({ cardsArray }) {
  const [time, setTime] = useState(0);
  const [timerOn, setTimerOn] = useState(false);

  useEffect(() => {
    let interval = null;

    if (timerOn) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 10);
      }, 10);
    } else {
      clearInterval(interval);
    }
    return () => {
      clearInterval(interval);
    };
  }, [timerOn]);

  useEffect(() => {
    if (cardsArray.length === 0) {
      setTimerOn(false);
    }
  }, [cardsArray.length]);

  return (
    <>
      <h2 className='header__text header__text_timer'>
        <span>{('0' + Math.floor((time / 60000) % 60)).slice(-2)}:</span>
        <span>{('0' + Math.floor((time / 1000) % 60)).slice(-2)}</span>
        <button className='timer__stopWatch' onClick={() => setTimerOn(true)}>
          Start
        </button>
      </h2>
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    cardsArray: state.cardsArrayReducer.cardsArray,
  };
};

export default connect(mapStateToProps, null)(Timer);
