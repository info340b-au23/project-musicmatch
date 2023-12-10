//our navigation bar for each page
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
export function Navbar() {
    const [isMenuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setMenuOpen(false);
    };

    return (
        <nav className={`navbarAllPages ${isMenuOpen ? 'menu-open' : ''}`}>
            <div className="menu-button" onClick={toggleMenu}>
                <span className="material-symbols-outlined">☰</span>
            </div>
            <div className={`navItems ${isMenuOpen ? 'show' : ''}`}>
                <div className="navItem" onClick={closeMenu}><NavLink to="/home">Home</NavLink></div>
                <div className="navItem" onClick={closeMenu}><NavLink to="/aboutUs">About Us</NavLink></div>
                <div className="navItem" onClick={closeMenu}><NavLink to="/feed">Feed</NavLink></div>
                <div className="navItem" onClick={closeMenu}><NavLink to="/profile">Profile</NavLink></div>
            </div>
        </nav>
    );
}