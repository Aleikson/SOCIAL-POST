import { NavLink } from 'react-router-dom';
import './NavLinks.css'

const NavLinks = () => {
  return (
    <ul className='navLinks'>
      <li>
        <NavLink to='/'>All Users</NavLink>
      </li>
      <li>
        <NavLink to='/u1/places'>My Places</NavLink>
      </li>
      <li>
        <NavLink to='/places/new'>Add Places</NavLink>
      </li>
      <li>
        <NavLink to='/auth'>Authenticate</NavLink>
      </li>
    </ul>
  );
};

export default NavLinks;
