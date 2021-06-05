import { connect } from 'react-redux';
import { useEffect } from 'react';
import store from '../../redux/store';
import {
  openTable,
  closeTable,
  resetResults,
} from '../../redux/actionCreators';

function Standings({ cardsArray, isOpened, name, score, timer }) {
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
            store.dispatch(closeTable(false)) && store.dispatch(resetResults())
          }
        ></button>
        <div className='popup-standings__player'>
          <div className='popup-standings__position'>1</div>
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
  };
};

const mapDispatchToProps = {
  openTable,
  closeTable,
  resetResults,
};

export default connect(mapStateToProps, mapDispatchToProps)(Standings);
