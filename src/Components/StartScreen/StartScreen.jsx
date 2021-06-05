import { connect } from 'react-redux';
import { closeStartScreen } from '../../redux/actionCreators';
import store from '../../redux/store';

function StartScreen({ isClosed }) {
  return (
    <section
      className={`startScreen ${isClosed ? 'startScreen_is-Closed' : ''}`}
    >
      <h1 className='startScreen__text'>Welcome to the Memory game!</h1>
      <div className='startScreen__container'>
        <input
          type='text'
          name=''
          className='startScreen__playerName'
          placeholder='Enter your name'
        />
        <button
          className='startScreen__play'
          type='submit'
          onClick={() => {
            store.dispatch(closeStartScreen(true));
          }}
        >
          Enter
        </button>
      </div>
    </section>
  );
}

const mapStateToProps = (state) => {
  return {
    isClosed: state.startScreenReducer.isClosed,
  };
};

const mapDispatchToProps = {
  closeStartScreen,
};

export default connect(mapStateToProps, mapDispatchToProps)(StartScreen);
