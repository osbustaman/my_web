import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

export const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className="header">
            <div className="container">
                <div className="logo">
                    <Link to="/">Lokilabs </Link>
                </div>
                <button className="menu-toggle" onClick={toggleMenu}>
                    ☰
                </button>
                <nav className={`navigation ${isMenuOpen ? 'open' : ''}`}>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/services">Services</Link></li>
                        <li><Link to="/portfolio">Portfolio</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

