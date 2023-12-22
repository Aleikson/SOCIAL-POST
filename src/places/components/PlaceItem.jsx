import Card from '../../shared/components/UIElements/Card';

function PlaceItem(props) {
  return (
    <li className='placeItem'>
      <Card className='placeItemContent'>
        <div className='placeItemImg'>
          <img src={props.image} alt={props.title} />
        </div>
        <div className='placeItemInfo'>
          <h2>{props.title}</h2>
          <h3>{props.address}</h3>
          <p>{props.description}</p>
        </div>
        <div className='placeItemAction'>
          <button>View on map</button>
          <button>Edit</button>
          <button>Delete</button>
        </div>
      </Card>
    </li>
  );
}

export default PlaceItem;
