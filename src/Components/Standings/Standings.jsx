import { connect } from 'react-redux';
import { useEffect } from 'react';
import store from '../../redux/store';
import { openTable, closeTable } from '../../redux/actionCreators';

function Standings({ cardsArray, isOpened }) {
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
          onClick={() => store.dispatch(closeTable(false))}
        ></button>
        <div className='popup-standings__player'>
          <div className='popup-standings__position'>1</div>
          <div className='popup-standings__name'>Alex</div>
          <div className='popup-standings__score'>10000</div>
        </div>
      </div>
    </section>
  );
}

const mapStateToProps = (state) => {
  return {
    cardsArray: state.cardsArrayReducer.cardsArray,
    isOpened: state.standingsReducer.isOpened,
  };
};

const mapDispatchToProps = {
  openTable,
  closeTable,
};

export default connect(mapStateToProps, mapDispatchToProps)(Standings);
