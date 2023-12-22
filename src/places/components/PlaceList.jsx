import Card from '../../shared/components/UIElements/Card';
import PlaceItem from './PlaceItem';

function PlaceList(props) {
  if (props.item.length === 0) {
    return (
      <div className='placeList center'>
        <Card>
          <h2>No places found. Maybe create one?</h2>
          <button>Share Place</button>
        </Card>
      </div>
    );
  }

  return (
    <ul className='placeList'>
      {props.item.map((place) => (
        <PlaceItem
          key={place.id}
          id={place.id}
          image={place.imageUrl}
          title={place.title}
          description={place.description}
          address={place.address}
          creatorId={place.creatorId}
          coordinates={place.location}
        />
      ))}
    </ul>
  );
}

export default PlaceList;
