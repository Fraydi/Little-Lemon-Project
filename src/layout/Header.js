import React from 'react';
import Nav from './Nav';
import LOGO from '../assets/logo.jpg';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
    return (
        <header className='header'>
            <Link to="/">
                <img src={LOGO} alt="Little Lemon Logo" className="logo" />
            </Link>
            <Nav />
        </header>
    );
}

export default Header;
