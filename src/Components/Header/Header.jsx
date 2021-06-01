function Header() {
  return (
    <div className='header'>
      <h1 className='header__text'>Welcome to the Memory game!</h1>;
      <h2 className='header__text header__text_timer'>Timer 00:01</h2>
      <h3 className='header__text header__text_score'>
        You have scored 100000000 points!
      </h3>
    </div>
  );
}

export default Header;
