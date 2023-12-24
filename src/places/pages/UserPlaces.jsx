import { useParams } from 'react-router-dom';
import PlaceList from '../components/PlaceList';

const TEST = [
  {
    id: 'p1',
    title: 'example',
    description: 'lorem lorem lorem lorem lorem lorem!',
    imageUrl:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/NYC_Empire_State_Building.jpg/640px-NYC_Empire_State_Building.jpg',
    address: '20 W 34th St, New York, NY 10001',
    location: {
      lat: 40.7484405,
      lng: -73.9878584,
    },
    creator: 'u1',
  },
  {
    id: 'p2',
    title: 'example2',
    description: 'One of the most famous sky scrapers in the world!',
    imageUrl:
      'https://upload.wikimedia.org/wikipedia/commons/3/32/20190616154621%21Echo_Park_Lake_with_Downtown_Los_Angeles_Skyline.jpg',
    address: '20 W 34th St, New York, NY 10001',
    location: {
      lat: 40.7484405,
      lng: -73.9878584,
    },
    creator: 'u2',
  },
];

function UserPlaces() {
  const userId = useParams().userId
  const loadedPlaces = TEST.filter(place => place.creator === userId)
  return <PlaceList item={loadedPlaces} />;
}

export default UserPlaces;
