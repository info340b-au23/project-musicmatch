import React from 'react';
import '../style.css'; //import the custom CSS file

export function Feed() {
    return (
        <div className="feed">
            {/* Navbar */}
            <nav className="navbarAllPages">
                <ul>
                    <li><a href="./src/Homepage.js"><span className="material-symbols-outlined">Home</span></a></li>
                    <li><a href="./src/Aboutus.js">About Us</a></li>
                    <li><a href="./src/Feed.js">Feed</a></li>
                    <li><a href="./src/userProfile.js">Profile</a></li>
                </ul>
            </nav>

            {/* Main Content */}
            <main>
                <h1 className="musicmatch">MUSICMATCH</h1>

                <div id="filtering">
                    <h5 style={{ color: 'white' }}>Filter By:</h5>
                    <button style={{ color: 'white', backgroundColor: '#16b1b5' }}>Mood</button>
                    <button style={{ color: 'white', backgroundColor: '#16b1b5' }}>Genre</button>
                    <button style={{ color: 'white', backgroundColor: '#16b1b5' }}>Activity</button>
                </div>

                {/* Sample Post */}
                <div className="post">
                    {/* Header */}
                    <div className="musicMatch-header">
                        <span className="musicMatch-actions">...</span>
                        <img src="../img/cat.jpg" alt="Jasmine's profile Pic" className="musicMatch-profile-image" />
                        <span className="musicMatch-profile-name">JasmineLosovsky</span>
                    </div>

                    {/* Image */}
                    <div className="musicMatch-image" >
                        <img src="../img/lanadelrey.jpeg" alt="lana del rey" />
                    </div>

                    {/* Actions */}
                    <div className="musicMatch-interact">
                        <button type="button" className="btn btn-info">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-heart-fill" viewBox="0 0 16 16">
                                <path fillRule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"></path>
                            </svg>
                        </button>
                        {/* Add other buttons as needed */}
                    </div>

                    {/* Save Button */}
                    <div className="musicMatch-save">
                        <button type="button" className="btn btn-info">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-bookmark-heart" viewBox="0 0 16 16">
                                <path fillRule="evenodd" d="M8 4.41c1.387-1.425 4.854 1.07 0 4.277C3.146 5.48 6.613 2.986 8 4.412z"></path>
                                <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5V2zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1H4z"></path>
                            </svg>
                        </button>
                    </div>

                    {/* Comments */}
                    <div className="comments">
                        <div className="comment">lanadelrey: nice post!</div>
                        <div className="comment">hey207: lol who dis!</div>
                        {/* Add more comments as needed */}
                    </div>
                </div>

                {/* Add more posts as needed */}

                {/* Footer */}
                <footer className="footerAllPages">
                    <div className="container">
                        <p><a href="mailto:email@musicmatch.uw.edu"><span className="material-icons">email</span> email@musicmatch.uw.edu</a></p>
                        <p><a href="tel:555-123-4567"><span className="material-icons">phone</span> 555-123-4567</a></p>
                        <p>&copy; MusicMatch 2023</p>
                    </div>
                </footer>

            </main>
        </div>
    );
}