import styled from 'styled-components';
import UsersItem from './UsersItem';
import Card from '../../shared/components/UIElements/Card';

const UserUl = styled.ul`
  list-style: none;
  margin: 0 auto;
  padding: 0;
  width: 90%;
  max-width: 50rem;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

const UsersList = (props) => {
  if (props.items.length === 0) {
    return (
      <div className='center'>
        <Card>
          <h2>No users found</h2>
        </Card>
      </div>
    );
  }

  return (
    <>
      <UserUl>
        {props.items.map((user) => {
          return (
            <UsersItem
              key={user.id}
              id={user.id}
              image={user.image}
              name={user.name}
              placeCount={user.places}
            />
          );
        })}
      </UserUl>
    </>
  );
};

export default UsersList;
