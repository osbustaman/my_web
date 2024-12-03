import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

export const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <header className="header">
            <div className="container">
                <div className="logo">
                    <Link to="/">MyLogo</Link>
                </div>
                <div className="hamburger" onClick={toggleMenu}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <nav className={`navigation ${menuOpen ? 'active' : ''}`}>
                    <ul>
                        <li>
                            <Link to="/" onClick={() => setMenuOpen(false)}>
                                Inicio
                            </Link>
                        </li>
                        <li>
                            <Link to="/services" onClick={() => setMenuOpen(false)}>
                                Quienes Somos
                            </Link>
                        </li>
                        <li>
                            <Link to="/about" onClick={() => setMenuOpen(false)}>
                                Nuestros Servicios
                            </Link>
                        </li>
                        <li>
                            <Link to="/contact" onClick={() => setMenuOpen(false)}>
                                Contactanos
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};
