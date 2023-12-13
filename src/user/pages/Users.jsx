import UsersList from '../components/UsersList';

const Users = () => {
  const USERS = [
    {
      id: 'u1',
      name: 'User1',
      image:
        'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png',
      places: '3',
    },
    {
      id: 'u2',
      name: 'User2',
      image:
        'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png',
      places: '2',
    },
  ];

  return <UsersList items={USERS} />;
};

export default Users;
