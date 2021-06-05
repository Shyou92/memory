import StartScreen from '../StartScreen/StartScreen';
import Header from '../Header/Header';
import Playfield from '../Playfield/Playfield';
import Standings from '../Standings/Standings';

function App({ store }) {
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
