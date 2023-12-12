import styled from 'styled-components';
import UsersItem from './UsersItem';

const UsersList = (props) => {
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

  if (props.items.length === 0) {
    return (
      <div className='center'>
        <h2>No users found</h2>
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
