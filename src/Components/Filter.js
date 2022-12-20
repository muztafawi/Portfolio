import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

import './Style.css';

function Filter() {
  const onStyle = ({ isActive }) => {
    return {
      // backgroundColor: isActive ? 'white' : 'transparent',
      boderRadius: isActive ? '1rem' : 'none',
    };
  };

  return (
    <div className="main">
      <div className="filters container">
        <ul className="filters__content">
          <NavLink style={onStyle} to={'/'} className="Btn">
            <button className="filters__button" data-target="#projects">
              Projects
            </button>
          </NavLink>

          <NavLink style={onStyle} to={'/skills'} className="Btn">
            <button className="filters__button" data-target="#skills">
              Skills
            </button>
          </NavLink>
        </ul>
      </div>
      <Outlet />
    </div>
  );
}

export default Filter;
