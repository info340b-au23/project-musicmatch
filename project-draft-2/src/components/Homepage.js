import React from 'react';
import '../style.css';
import { HomepageFiltering } from './HomepageFiltering.js';
import { Map } from './Map.js';

export function Homepage() {
    return (
        <div className="container">
            <nav className="navbarAllPages">
                <ul>
                    <li><a href="#home"><span class="material-symbols-outlined">Home</span></a></li>
                    <li><a href="../html/aboutus.html">About Us</a></li>
                    <li><a href="../html/feed.html">Feed</a></li>
                    <li><a href="../html/userprofile.html">Profile</a></li>
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
            <Map/>;

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