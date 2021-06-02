import Header from '../Header/Header';
import Playfield from '../Playfield/Playfield';

function App({ store }) {
  return (
    <div className='App'>
      <Header />
      <Playfield store={store} />
    </div>
  );
}

export default App;
