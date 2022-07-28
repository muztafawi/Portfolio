/** @format */
import { NavLink, Outlet } from 'react-router-dom';
import React from 'react';

function Main() {
  const onStyle = ({ isActive }) => {
    return {
      color: isActive ? 'Black' : 'grey',
      textDecoration: isActive ? 'underline' : 'none',
    };
  };
  return (
    <div className='Main'>
      {/* TOP  */}
      <div className='Menu navbar'>
        <ul>
          <NavLink style={onStyle} to={'/about'}>
            About
          </NavLink>
          <NavLink style={onStyle} to={'/portfolio'}>
            Portfolio
          </NavLink>
          <NavLink style={onStyle} to={'/blog'}>
            Blog
          </NavLink>
          <NavLink style={onStyle} to={'/contact'}>
            Contact
          </NavLink>
        </ul>
      </div>
      <Outlet />
    </div>
  );
}

export default Main;
