import styled from 'styled-components';
import Card from '../../shared/components/UIElements/Card';
import PlaceItem from './PlaceItem';

const List = styled.ul`
  list-style: none;
  margin: 1rem auto;
  padding: 0;
  width: 90%;
  max-width: 40rem;
`;

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
    <List className='placeList'>
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
    </List>
  );
}

export default PlaceList;
