import React from 'react';
import logo from '../images/Alto_logo.png';
import { Link } from 'react-router-dom';

import './navbar.css';

const Navbar = () => {
    return (
        <div className="Header">
            <img src={logo} className="Logo" alt="logo" />
            <nav className="Nav">
                <Link to="/page1">Page 1</Link>
                <Link to="/page2">Page 2</Link>
                <Link to="/page3">Page 3</Link>
                <Link to="/page4">Page 4</Link>
            </nav>
        </div>
    )
}

export default Navbar