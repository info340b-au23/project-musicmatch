//our navigation bar for each page
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
export function Navbar(props) {
    const [isMenuOpen, setMenuOpen] = useState(false);

    const currentUser = props.currentUser;

    const handleSignOut = (event) => {
        console.log('signing out');
    }

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
                {currentUser.userId && 
                    <>
                        <div className="navItem" onClick={closeMenu}><NavLink to="/profile">Profile</NavLink></div>
                        <button className="btn btn-secondary ms-2" onClick={handleSignOut}>Sign Out</button>
                    </>
                }
                {!currentUser.userId &&
                    <div className="navItem" onClick={closeMenu}><NavLink to="/signin">Profile</NavLink></div>
                }
            </div>
        </nav>
    );
}