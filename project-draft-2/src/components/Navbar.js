//our navigation bar for each page
import { NavLink } from 'react-router-dom';

export function Navbar() {
    return (
        <nav className="navbarAllPages">
            <ul>
                <li><NavLink to="/home"><span className="material-symbols-outlined">Home</span></NavLink></li>
                <li><NavLink to="/aboutUs">About Us</NavLink></li>
                <li><NavLink to="/feed">Feed</NavLink></li>
                <li><NavLink to="/profile">Profile</NavLink></li>
            </ul>
        </nav>
    );
}