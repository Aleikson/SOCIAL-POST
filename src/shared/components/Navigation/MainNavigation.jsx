import { Link } from 'react-router-dom';
import MainHeader from './MainHeader';

import './MainNavigation.css';
import NavLinks from './NavLinks';
import SideDrawer from './SideDrawer';
import React, { useState } from 'react';
import Backdrop from '../UIElements/Backdrop';

const MainNavigation = () => {
  const [drawerIsOpen, setDrawerIsOpen] = useState(false);

  const openDrawer = () => {
    setDrawerIsOpen(true);
  };

  const closeDrawer = () => {
    setDrawerIsOpen(false);
  };

  return (
    <React.Fragment>
      {drawerIsOpen && <Backdrop onClick={closeDrawer} />}
      <SideDrawer show={drawerIsOpen}>
        <nav className='mainNavigationDrawerNav'>
          <NavLinks />
        </nav>
      </SideDrawer>

      <MainHeader>
        <button className='mainNavigationMenuBtn' onClick={openDrawer}>
          <span />
          <span />
          <span />
        </button>
        <h1 className='mainNavigationTitle'>
          <Link to='/'>Social Post</Link>
        </h1>
        <nav className='mainNavigationHeaderNav'>
          <NavLinks />
        </nav>
      </MainHeader>
    </React.Fragment>
  );
};

export default MainNavigation;
