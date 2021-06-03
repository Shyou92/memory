import { connect } from 'react-redux';
import Timer from '../Timer/Timer';

function Header({ score }) {
  return (
    <div className='header'>
      <h1 className='header__text'>Welcome to the Memory game!</h1>;
      <Timer />
      <h3 className='header__text header__text_score'>
        You have scored {score} points!
      </h3>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    score: state.changeScoreReducer.score,
  };
};

export default connect(mapStateToProps, null)(Header);
