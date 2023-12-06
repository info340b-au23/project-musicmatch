import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';


export default function Feed(props) {
    const data = props.data;
    const [savedMusic, setSavedMusic] = useState([]);

    const handleSaveClick = (post) => {
        setSavedMusic([...savedMusic, post]);
    };

    const samplePost = data.map((userData) => (
        /* mapping to diplay each user's profile name and icon, image posted, and comments */
        <div key={userData.userName} >

            {/* profile name and icon */}
            <div className="header">
                <img
                    className="profile-image"
                    src={userData.userNameProfileIcon}
                    alt={userData.usernameIconAlt}
                />
                <span className="profile-name">
                    {userData.userName}
                </span>
            </div>

            {/* profile image */}
            <div className="image">
                <img className="img-fluid image"
                    src={userData.uploadedProfileImage}
                    alt={userData.uploadedProfileImageAlt}
                />
            </div>

            {/* profile actions: like button and save button */}
            {/* Like button */}
            <div className="like">
                <button type="button" className="btn btn-info">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-heart-fill" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"></path>
                    </svg>
                </button>
            </div>

            {/* Save button */}
            <div className="save">
                <button type="button" className="btn btn-info"  onClick={() => handleSaveClick(userData)}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-bookmark-heart" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M8 4.41c1.387-1.425 4.854 1.07 0 4.277C3.146 5.48 6.613 2.986 8 4.412z"></path>
                        <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5V2zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1H4z"></path>
                    </svg>
                </button>
            </div>

            {/* profile comments */}
            <div className="comment">
                {userData.commentOne}
            </div>
            <div className="comment">
                {userData.commentTwo}
            </div>
        </div>
    ));

    return (
        <div className="feed">
            {/* Main Content */}
            <main>
                <h1 className="musicmatch-header">MUSICMATCH</h1>

                <div id="filtering">
                    <h5 style={{ color: 'white' }}>Filter By:</h5>
                    <button style={{ color: 'white', backgroundColor: '#16b1b5' }}>Mood</button>
                    <button style={{ color: 'white', backgroundColor: '#16b1b5' }}>Genre</button>
                    <button style={{ color: 'white', backgroundColor: '#16b1b5' }}>Activity</button>
                </div>

                {/* Sample Post */}
                <div className="post">
                    {samplePost}
                </div>
            </main>
        </div>
    );
}