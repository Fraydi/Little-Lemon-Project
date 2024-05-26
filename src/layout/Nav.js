import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Nav.css';

function Nav() {
  const [activeLink, setActiveLink] = useState('/');

  const handleClick = (path) => {
    setActiveLink(path);
  };

  return (
    <nav>
      <ul className="nav-list">
        <li className="nav-item">
          <NavLink
            to="/"
            className={activeLink === '/' ? 'active' : ''}
            onClick={() => handleClick('/')}
          >
            Home
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            to="/about"
            className={activeLink === '/about' ? 'active' : ''}
            onClick={() => handleClick('/about')}
          >
            About
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            to="/menu"
            className={activeLink === '/menu' ? 'active' : ''}
            onClick={() => handleClick('/menu')}
          >
            Menu
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            to="/reservations"
            className={activeLink === '/reservations' ? 'active' : ''}
            onClick={() => handleClick('/reservations')}
          >
            Reservations
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            to="/order"
            className={activeLink === '/order' ? 'active' : ''}
            onClick={() => handleClick('/order')}
          >
            Order Online
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            to="/login"
            className={activeLink === '/login' ? 'active' : ''}
            onClick={() => handleClick('/login')}
          >
            Login
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
