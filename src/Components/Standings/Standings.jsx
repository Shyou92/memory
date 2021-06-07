import { connect } from 'react-redux';
import { useEffect } from 'react';
import store from '../../redux/store';
import {
  openTable,
  closeTable,
  increasePlayerNumberPosition,
} from '../../redux/actionCreators';

function Standings({ cardsArray, isOpened, name, score, timer, number }) {
  useEffect(() => {
    if (cardsArray.length === 0) {
      store.dispatch(openTable(true));
    }
  }, [cardsArray]);

  return (
    <section
      className={`popup-standings ${
        isOpened ? 'popup-standings_is-opened' : ''
      }`}
    >
      <div className='popup-standings__table'>
        <button
          className='popup-standings__close'
          type='button'
          onClick={() =>
            store.dispatch(closeTable(false)) &&
            store.dispatch(increasePlayerNumberPosition(1))
          }
        ></button>
        <div className='popup-standings__player'>
          <div className='popup-standings__position'>{number}</div>
          <div className='popup-standings__name'>{name}</div>
          <div className='popup-standings__time'>{timer}</div>
          <div className='popup-standings__score'>{score}</div>
        </div>
      </div>
    </section>
  );
}

const mapStateToProps = (state) => {
  return {
    cardsArray: state.cardsArrayReducer.cardsArray,
    isOpened: state.standingsReducer.isOpened,
    name: state.playerReducer.name,
    score: state.changeScoreReducer.score,
    timer: state.setTimerReducer.time,
    number: state.positionReducer.number,
  };
};

const mapDispatchToProps = {
  openTable,
  closeTable,
  increasePlayerNumberPosition,
};

export default connect(mapStateToProps, mapDispatchToProps)(Standings);
