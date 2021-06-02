import { connect } from 'react-redux';
import Card from '../Card/Card';

function CardList({ store, cardsArray }) {
  return (
    <div className='cardList'>
      {cardsArray.map((item) => {
        return <Card key={item.id} card={item} store={store} />;
      })}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    cardsArray: state.cardsArrayReducer.cardsArray,
  };
};

export default connect(mapStateToProps, null)(CardList);
