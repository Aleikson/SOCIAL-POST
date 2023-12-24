import Card from '../../shared/components/UIElements/Card';
import Button from '../../shared/components/FormElements/Button'
import './PlaceItem.css'

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
          <Button inverse>View on map</Button>
          <Button to={`/places/${props.id}`}>Edit</Button>
          <Button danger>Delete</Button>
        </div>
      </Card>
    </li>
  );
}

export default PlaceItem;
