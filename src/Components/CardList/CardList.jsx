import cardsArray from '../../constants/constants';
import Card from '../Card/Card';

function CardList() {
  return (
    <div className='cardList'>
      {cardsArray.map((item) => {
        return <Card key={item.id} card={item} />;
      })}
    </div>
  );
}

export default CardList;
