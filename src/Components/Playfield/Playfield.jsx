import CardList from '../CardList/CardList';

function Playfield({ store }) {
  return (
    <section className='playfield'>
      <CardList store={store} />
    </section>
  );
}

export default Playfield;
