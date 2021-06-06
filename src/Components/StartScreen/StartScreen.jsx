import { connect } from 'react-redux';
import {
  closeStartScreen,
  addPlayerName,
  startTimer,
} from '../../redux/actionCreators';
import store from '../../redux/store';

function StartScreen({ isClosed }) {
  function handleSubmit(e) {
    e.preventDefault();
    if (e.target.firstChild.value !== 0) {
      store.dispatch(addPlayerName(e.target.firstChild.value));
    } else {
      return;
    }
    return (e.target.firstChild.value = '');
  }

  return (
    <section
      className={`startScreen ${isClosed ? 'startScreen_is-Closed' : ''}`}
    >
      <h1 className='startScreen__text'>Welcome to the Memory game!</h1>
      <form className='startScreen__container' onSubmit={handleSubmit}>
        <input
          type='text'
          className='startScreen__playerName'
          placeholder='Enter your name'
        />
        <button
          className='startScreen__play'
          type='submit'
          onClick={() => {
            store.dispatch(closeStartScreen(true)) &&
              store.dispatch(startTimer(true));
          }}
        >
          Enter
        </button>
      </form>
    </section>
  );
}

const mapStateToProps = (state) => {
  return {
    isClosed: state.startScreenReducer.isClosed,
    name: state.playerReducer.name,
    timer: state.setTimerReducer.time,
  };
};

const mapDispatchToProps = {
  closeStartScreen,
  addPlayerName,
  startTimer,
};

export default connect(mapStateToProps, mapDispatchToProps)(StartScreen);
