import React from 'react';
import {NavLink} from 'react-router-dom';
import MenuItem from './Menu/MenuItem.js';
import MenuLogo from './Menu/MenuLogo.js';
import MenuWelcome from './Menu/MenuWelcome.js';

class Menu extends React.Component {
  render() {
    return(
    <div className='side-menu'>
      <MenuLogo />
      <MenuWelcome />
      <ul>
        <li><NavLink exact activeClassName='active-route' to='/'>
          Home
        </NavLink></li>
        <li>

      <MenuItem text="My Profile" link="php/profile.php" />></li>


        <li><NavLink text="Calendar" link='calendar.php'>
          Calendar
        </NavLink></li>
        <li><NavLink activeClassName='active-route' to='/member_information'>
          Member Information
        </NavLink></li>
        <li><NavLink activeClassName='active-route' to='/upcoming_events'>
          Upcoming Events
        </NavLink></li>
      </ul>
      <div id="bottom-options">
        <ul>
          <MenuItem text="Sign Out" link="php/process_signout.php" />
          <li>
            <NavLink activeClassName='active-route' to='kbase.php'>
            FAQ
          </NavLink>
        </li>
        </ul>
      </div>
    </div>
    );
  }
};

export default Menu;
