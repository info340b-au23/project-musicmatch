import React from 'react';
import { Link } from 'react-router-dom';
export default function UserProfile(props) {
    const formData = props.formData;

    return (
        <div className='profile'>

            <body class="container">
                {/* Main Content */}
                <header>
                    <h1 class="musicmatch-header">MY PROFILE</h1>
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
                        </div>
                        <div className="buttons">
                            <Link to='/profile/form'><button id='song-form'>Create Post</button></Link>
                            <Link to='/savedMusic'><button id='profile-button'>Saved Music</button></Link>
                        </div>
                    </div>

                    {/* Sample Post */}
                    <div className="container">
                        <div className="row">
                            <h2 className="sub-header">My Posts</h2>
                            <div className="posts">
                                {/* Post 1 */}
                                <div className="col-12 col-md-4">
                                    <div className="card">
                                    {formData && (
                                        <div className="card-body">
                                            <h2 className="song-name">Song: {formData.songName}</h2>
                                            <h3 id="artist">Artist: {formData.artistName}</h3>
                                            <img src="../img/lanadelrey.jpeg" alt="user's activity"></img>
                                            <button className="genre">{formData.genre}</button>
                                            <button className="location">{formData.location}</button>
                                            <button className="activity">{formData.activity}</button>
                                            <div><button className="play">Play</button></div>
                                        </div>
                                    )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Sample Liked Song */}
                    {/* <div class="container">
                        <div class="row">
                            <h2 class="sub-header">Liked Songs</h2>
                            <div class="liked-songs"> */}
                                {/* Song 1 */}
                                {/* <div class="col-12 col-md-4">
                                    <div class="card">
                                        <div class="card-body">
                                            <h2 class="song-name">Song 1</h2>
                                            <h3 id="artist">Artist name</h3>
                                            <button class="genre">Pop</button>
                                            <button class="location">Suzzallo</button>
                                            <button class="activity">Studying</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> */}

                </main>
            </body>
        </div>
    );
}
