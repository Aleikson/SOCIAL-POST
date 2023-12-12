import { Link } from 'react-router-dom';
import Avatar from '../../shared/components/Avatar';
import Card from '../../shared/components/Card';
import './UserItem.css';

const UserItem = (props) => {
  return (
    <li className='userItem'>
      <Card className='userItemContent'>
        <Link to={`/${props.id}/places`}>
          <div className='userItemImage'>
            <Avatar image={props.image} alt={props.name} />
          </div>
          <div className='userItemInfo'>
            <h2>{props.name}</h2>
            <h3>
              {props.placeCount} {props.placeCount === 1 ? 'Place' : 'Places'}
            </h3>
          </div>
        </Link>
      </Card>
    </li>
  );
};

export default UserItem;
