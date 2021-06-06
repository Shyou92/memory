import { connect } from 'react-redux';
import Card from '../Card/Card';

function CardList({ store, cardsArray }) {
  return (
    <div className='cardList'>
      {cardsArray.map((item) => {
        item.isVisible = false;
        return <Card key={item.id} card={item} store={store} />;
      })}
    </div>
  );
}

const mapStateToProps = (state) => {
  const stateArray = state.cardsArrayReducer.cardsArray;
  return {
    cardsArray: stateArray,
  };
};

export default connect(mapStateToProps, null)(CardList);
