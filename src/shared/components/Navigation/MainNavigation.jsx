import { Link } from 'react-router-dom';
import MainHeader from './MainHeader';

import './MainNavigation.css';
import NavLinks from './NavLinks';

const MainNavigation = () => {
  return (
    <MainHeader>
      <button className='mainNavigationMenuBtn'>
        <span />
        <span />
        <span />
      </button>
      <h1 className='mainNavigationTitle'>
        <Link to='/'>Social Post</Link>
      </h1>
      <nav>
        <NavLinks />
      </nav>
    </MainHeader>
  );
};

export default MainNavigation;
