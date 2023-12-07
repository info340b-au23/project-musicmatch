import React, { useState } from 'react';
import Form from 'react-bootstrap/Form'

export default function Feed(props) {
    const data = props.data;
    const filterCriteria = props.filterCriteria;

    //filtering code to let the user filter on posts:
    const [location, setlocation] = useState(false);
    const [genre, setGenre] = useState(false);
    const [activity, setActivity] = useState(false);


    //callback functions
    const handleLocation = (event) => {
        setlocation(event.target.checked);
    }

    const handleGenre = (event) => {
        setGenre(event.target.checked);
    }

    const handleActivity = (event) => {
        setActivity(event.target.checked);
    }

    //callback function for button 
    const handleClick = () => {
        //call the passed down applyFilterCallback function
        props.applyFilterCallback(location, genre, activity);
    };

    //for viewing saved posts 
    const [savedPosts, setSavedPosts] = useState([]);
    const handleSaveClick = (post) => {
        setSavedPosts([...savedPosts, post]);
    };

    /* mapping to diplay each user's profile name and icon, image posted, location, genre, and a */
    const samplePost = data
        .filter((userData) => {
            const userLocation = filterCriteria.location ? userData.location === filterCriteria.location : true;
            const userGenre = filterCriteria.genre ? userData.genre === filterCriteria.genre : true;
            const userActivity = filterCriteria.activity ? (userData.activity ? userData.activity === filterCriteria.activity : false) : true;

            return userLocation && userGenre && userActivity;
        })
        .map((userData) => (
            <div key={userData.songName}>
                <div className="row">
                    {/* Profile name and icon */}
                    <div className="col-12 header">
                        <img
                            className="profile-icon"
                            src={userData.userNameProfileIcon}
                            alt={userData.usernameIconAlt}
                        />
                        <span className="profile-name">
                            {userData.userName}
                        </span>
                    </div>

                    {/* Profile image */}
                    <div className="col-12 ">
                        <img
                            className="img-fluid image"
                            src={userData.postImage}
                            alt={userData.postImageAlt}
                        />
                    </div>

                    {/* Like button */}
                    <div className="col-12 actions">
                        {/* Like button */}
                        <button type="button" className="btn btn-info like">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-heart-fill" viewBox="0 0 16 16">
                                <path fillRule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"></path>
                            </svg>
                        </button>

                        {/* Save button */}
                        <button type="button" className="btn btn-info save" onClick={() => handleSaveClick(userData)}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-bookmark-heart" viewBox="0 0 16 16">
                                <path fillRule="evenodd" d="M8 4.41c1.387-1.425 4.854 1.07 0 4.277C3.146 5.48 6.613 2.986 8 4.412z"></path>
                                <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5V2zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1H4z"></path>
                            </svg>
                        </button>
                    </div>
                    {/* Filter information */}
                    <div className="col-12 filter-info text-center">
                        <span className="filter-item">
                            Location: {userData.location}
                        </span>
                        <span className="filter-item">
                            Genre: {userData.genre}
                        </span>
                        <span className="filter-item">
                            Activity: {userData.activity}
                        </span>
                    </div>
                </div>

            </div>
        ));

    return (
        <div className="feed">
            <main>
                <h1 className="musicmatch-header">MUSICMATCH</h1>

                <div className="form-check">
                    <input
                        id="locationCheckBox"
                        type="checkbox"
                        className="form-check-input"
                        checked={location}
                        onChange={handleLocation}
                    />
                    <label htmlFor="locationCheckBox" className="form-check-label">
                        Location
                    </label>
                </div>

                <div className="form-check">
                    <input
                        id="genreCheckBox"
                        type="checkbox"
                        className="form-check-input"
                        checked={genre}
                        onChange={handleGenre}
                    />
                    <label htmlFor="genreCheckBox" className="form-check-label">
                        Genre
                    </label>
                </div>

                <div className="form-check">
                    <input
                        id="activityCheckbox"
                        type="checkbox"
                        className="form-check-input"
                        checked={activity}
                        onChange={handleActivity}
                    />
                    <label htmlFor="activityCheckbox" className="form-check-label">
                        Activity
                    </label>
                </div>

                <button
                    id="submitButton"
                    type="submit"
                    className="btn btn-info"
                    onClick={handleClick}
                >
                    Apply Filter
                </button>

                <div className="post">{samplePost}</div>
            </main>
        </div>
    );
}