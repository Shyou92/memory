import { render } from '@testing-library/react';
import StartScreen from '../StartScreen/StartScreen';
import Header from '../Header/Header';
import Playfield from '../Playfield/Playfield';
import Standings from '../Standings/Standings';

function App({ store }) {
  store.subscribe(render);
  const unsubscribe = store.subscribe(() =>
    console.log('State after dispatch: ', store.getState())
  );

  unsubscribe();
  return (
    <div className='App'>
      <StartScreen />
      <Header />
      <Playfield store={store} />
      <Standings />
    </div>
  );
}

export default App;
