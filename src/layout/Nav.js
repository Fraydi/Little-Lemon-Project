import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Nav.css';

function Nav() {
  const [activeLink, setActiveLink] = useState('/');

  const handleClick = (path) => {
    setActiveLink(path);
  };

  return (
    <nav aria-label="Main Navigation">
      <ul className="nav-list">
        <li className="nav-item">
          <NavLink
            to="/"
            className={activeLink === '/' ? 'active' : ''}
            onClick={() => handleClick('/')}
            aria-current={activeLink === '/' ? 'page' : undefined}
          >
            Home
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            to="/about"
            className={activeLink === '/about' ? 'active' : ''}
            onClick={() => handleClick('/about')}
            aria-current={activeLink === '/about' ? 'page' : undefined}
          >
            About
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            to="/menu"
            className={activeLink === '/menu' ? 'active' : ''}
            onClick={() => handleClick('/menu')}
            aria-current={activeLink === '/menu' ? 'page' : undefined}
          >
            Menu
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            to="/reservations"
            className={activeLink === '/reservations' ? 'active' : ''}
            onClick={() => handleClick('/reservations')}
            aria-current={activeLink === '/reservations' ? 'page' : undefined}
          >
            Reservations
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            to="/order"
            className={activeLink === '/order' ? 'active' : ''}
            onClick={() => handleClick('/order')}
            aria-current={activeLink === '/order' ? 'page' : undefined}
          >
            Order Online
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            to="/login"
            className={activeLink === '/login' ? 'active' : ''}
            onClick={() => handleClick('/login')}
            aria-current={activeLink === '/login' ? 'page' : undefined}
          >
            Login
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
