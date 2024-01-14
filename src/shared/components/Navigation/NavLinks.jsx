import { NavLink } from 'react-router-dom';
import './NavLinks.css';
import { useContext } from 'react';
import { AuthContext } from '../../context/authContext';

const NavLinks = () => {
  const auth = useContext(AuthContext);

  return (
    <ul className='navLinks'>
      <li>
        <NavLink to='/'>All Users</NavLink>
      </li>
      {auth.isLoggedIn && (
        <li>
          <NavLink to='/u1/places'>My Places</NavLink>
        </li>
      )}
      {auth.isLoggedIn && (
        <li>
          <NavLink to='/places/new'>Add Places</NavLink>
        </li>
      )}
      {!auth.isLoggedIn && (
        <li>
          <NavLink to='/auth'>Authenticate</NavLink>
        </li>
      )}
      {auth.isLoggedIn && (
        <li>
          <button onClick={auth.logout}>LOGOUT</button>
        </li>
      )}
    </ul>
  );
};

export default NavLinks;
