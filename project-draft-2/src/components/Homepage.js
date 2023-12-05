import React from 'react';
import '../style.css';
import { Map } from './Map.js';
import { NavLink } from 'react-router-dom';
import { Footer } from './Footer.js';

export default function Homepage() {
    return (
        <div className="homepage">
            {/* <nav className="navbarAllPages">
                <ul>
                    <li><NavLink to="/home"><span className="material-symbols-outlined">Home</span></NavLink></li>
                    <li><NavLink to="/aboutUs">About Us</NavLink></li>
                    <li><NavLink to="/feed">Feed</NavLink></li>
                    <li><NavLink to="/profile">Profile</NavLink></li>
                </ul>
            </nav> */}

            <main>
                <header>
                    <div className="container">
                        <h1 className="musicmatch">MUSICMATCH</h1>
                        <p className="motto">See what your friends are listening to!</p>
                    </div>
                </header>
            </main>

            <Map />;

            {/* Footer */}
            <footer>
                <div className="container">
                    <p><a href="mailto:email@musicmatch.uw.edu"><span className="material-icons">email</span> email@musicmatch.uw.edu</a></p>
                    <p><a href="tel:555-123-4567"><span className="material-icons">phone</span> 555-123-4567</a></p>
                    <p>&copy; MusicMatch 2023</p>
                </div>
            </footer>

            {/* Not sure if were using this */}
            {/* <Footer /> */}
        </div>
    );
}
