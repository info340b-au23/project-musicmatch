import React from 'react';
import '../style.css';

export function UserProfile(props) {
    return (
        <div className='profile'>
            {/* Navbar */}
            <nav className="navbarAllPages">
                <ul>
                    <li><a href="../Homepage.js"><span className="material-symbols-outlined">Home</span></a></li>
                    <li><a href="../Aboutus.js">About Us</a></li>
                    <li><a href="../Feed.js">Feed</a></li>
                    <li><a href="../UserProfile.js">Profile</a></li>
                </ul>
            </nav>

            <body class="container">
                {/* Main Content */}
                <header>
                    <h1 class="musicmatch">MY PROFILE</h1>
                </header>
                <main>
                    <div className="profile-container">
                        {/*<img
                            className="profile-pic"
                            src={props.userNameProfileIcon}
                            alt={props.usernameIconAlt}/>*/}
                        <img class="profile-pic" src="../img/cat.jpg" alt="user's profile picture"></img>
                        <div className="text-container">
                            <p id="username">{props.userName}music_lover21</p>
                            <p id="email">y{props.userEmail}yaymusic@gmail.com</p>
                            <button id='profile-button'>Edit Profile</button>
                        </div>
                        <button id='song-form'>Create Post</button>
                    </div>

                    {/* Sample Post */}
                    <div className="container">
                        <div className="row">
                            <h2 className="sub-header">My Posts</h2>
                            <div className="posts">
                                {/* Post 1 */}
                                <div className="col-12 col-md-4">
                                    <div className="card">
                                        <div className="card-body">
                                            <h2 className="song-name">Song 1</h2>
                                            <h3 id="artist">Artist name</h3>
                                            <img src="../img/lanadelrey.jpeg" alt="user's activity"></img>
                                            <button className="genre">Pop</button>
                                            <button className="location">Suzzallo</button>
                                            <button className="activity">Studying</button>
                                            <div><button className="play">Play</button></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Sample Liked Song */}
                    <div class="container">
                        <div class="row">
                            <h2 class="sub-header">Liked Songs</h2>
                            <div class="liked-songs">
                                {/* Song 1 */}
                                <div class="col-12 col-md-4">
                                    <div class="card">
                                        <div class="card-body">
                                            <h2 class="song-name">Song 1</h2>
                                            <h3 id="artist">Artist name</h3>
                                            <button class="genre">Pop</button>
                                            <button class="location">Suzzallo</button>
                                            <button class="activity">Studying</button>
                                            <div><button class="play">Play</button></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Footer */}
                    <footer className="footerAllPages">
                        <div className="container">
                            <p><a href="mailto:email@musicmatch.uw.edu"><span className="material-icons">email</span> email@musicmatch.uw.edu</a></p>
                            <p><a href="tel:555-123-4567"><span className="material-icons">phone</span> 555-123-4567</a></p>
                            <p>&copy; MusicMatch 2023</p>
                        </div>
                    </footer>
                </main>
            </body>
        </div>
    );
}
