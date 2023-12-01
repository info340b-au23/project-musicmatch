import React from 'react';
import '../style.css';
import { HomepageFiltering } from './HomepageFiltering.js';
import { Map } from './Map.js';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

export function Homepage() {
    return (
        <div className="homepage">
            <nav className="navbarAllPages">
                <ul>
                    <li><NavLink to="/home"><span className="material-symbols-outlined">Home</span></NavLink></li>
                    <li><NavLink to="/aboutUs">About Us</NavLink></li>
                    <li><NavLink to="/feed">Feed</NavLink></li>
                    <li><NavLink to="/profile">Profile</NavLink></li>
                    {/* <li><Link to="/">Home</Link></li>
                    <li><Link to="/">About Us</Link></li>
                    <li><Link to="/">Feed</Link></li>
                    <li><Link to="/">Profile</Link></li> */}
                </ul>
            </nav>

            <main>
                <header>
                    <div className="container">
                        <h1 className="musicmatch">MUSICMATCH</h1>
                        <p className="motto">See what your friends are listening to!</p>
                    </div>
                </header>
            </main>

            <HomepageFiltering />
            <Map />;

            <footer>
                <div className="container">
                    <p><a href="mailto:email@musicmatch.uw.edu"><span className="material-icons">email</span> email@musicmatch.uw.edu</a></p>
                    <p><a href="tel:555-123-4567"><span className="material-icons">phone</span> 555-123-4567</a></p>
                    <p>&copy; MusicMatch 2023</p>
                </div>
            </footer>
        </div>
    );
}

export default Homepage;