import UsersList from '../components/UsersList';

const Users = () => {
  const USERS = [
    {
      id: 'u1',
      name: 'User1',
      image:
        'https://i.imgflip.com/1vajvt.jpg',
      places: '3',
    },
    {
      id: 'u2',
      name: 'User2',
      image:
        'https://i.imgflip.com/1vajvt.jpg',
      places: '2',
    },
  ];

  return <UsersList items={USERS} />;
};

export default Users;
