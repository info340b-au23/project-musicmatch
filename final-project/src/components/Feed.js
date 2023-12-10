import React, { useState, useEffect } from 'react';
import Form from 'react-bootstrap/Form';
import { getDatabase, ref, onValue } from 'firebase/database';

export default function Feed(props) {
<<<<<<< HEAD
    const data = props.data;
    const handleSaveClick = props.handleSaveClick;
=======
>>>>>>> refs/remotes/origin/main

    //filtering code to let the user filter on posts:
    const [location, setlocation] = useState("All");
    const [genre, setGenre] = useState("All");
    const [activity, setActivity] = useState("All");
    const [postData, setPostData] = useState([]);


    useEffect(() => {
        const db = getDatabase();
        const postsRef = ref(db, 'posts');

        onValue(postsRef, (snapshot) => {
            if (snapshot.exists()) {
                const data = snapshot.val();
               // const array = Object.values(data);
                setPostData(snapshot.exportVal());
            } else {
                console.log('No data');
            }
        }, (error) => {
            console.log('Error:', error);
        });
    }, []);

    //callback functions
    const handleLocation = (event) => {
        console.log("Selected Location: ", event.target.value)
        setlocation(event.target.value);
    }

    const handleGenre = (event) => {
        console.log("Selected Genre: ", event.target.value)
        setGenre(event.target.value);
    }

    const handleActivity = (event) => {
        console.log("SelectedActivity: ", event.target.value)
        setActivity(event.target.value);
    }

    // //for viewing saved posts 
    // const [savedPosts, setSavedPosts] = useState([]);
    // const handleSaveClick = (post) => {
    //     setSavedPosts([...savedPosts, post]);
    // };

    function filterBy(postObj) {
        if (
            ((location !== "All") && ((location.toUpperCase() !== postObj.Location.toUpperCase())))
            || ((genre !== "All") && ((genre.toUpperCase() !== postObj.genre.toUpperCase())))
            || ((activity !== "All") && ((activity.toUpperCase() !== postObj.activity.toUpperCase())))
        )
        {
            return false;
        }

         return true;
    }

    var filteredPosts = Object.entries(postData).filter(([k,v]) => filterBy(v))
    const samplePost = filteredPosts
        .map((userData) => (
            <div id={userData[0]}>
                <div className="row">
                    {/* Profile name and icon */}
                    <div className="col-12 header">
                        <img
                            className="profile-icon"
                            src={userData[1].userNameProfileIcon}
                            alt={userData[1].usernameIconAlt}
                        />
                        <span className="profile-name">
                            {userData[1].userName}
                        </span>
                    </div>

                    {/* Profile image */}
                    <div className="col-12 ">
                        <img
                            className="img-fluid image"
                            src={userData[1].postImage}
                            alt={userData[1].postImageAlt}
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
                    {/* song name and artist */}
                    <div className="col-12 filter-info text-center">
                        <span className="filter-item">
                            Song name: {userData[1].songTitle}
                        </span>
                        <span className="filter-item">
                            Artist: {userData[1].songArtist}
                        </span>
                    </div>
                    {/* Filter information */}
                    <div className="col-12 filter-info text-center">
                        <span className="filter-item">
                            Location: {userData[1].Location}
                        </span>
                        <span className="filter-item">
                            Genre: {userData[1].genre}
                        </span>
                        <span className="filter-item">
                            Activity: {userData[1].activity}
                        </span>
                    </div>
                </div>

            </div>
        ));

    return (
        <div className="feed">
            <main>
                <h1 className="musicmatch-header">MUSICMATCH</h1>
                <h3 className="header-2">If you are not seeing the post you just created, refresh the page!</h3>

                <div className={"d-flex justify-content-center filter-container"}>
                    <Form.Group className="mb-3" controlId="Genre">
                        <Form.Label className="text-white filter-container">Genre:</Form.Label>
                        <Form.Select aria-label="Genre filter" defaultValue={genre} onChange={handleGenre} className="btn btn-info" style={{ width: "100px" }}>

                            <option value="All">All</option>
                            <option value="Pop">Pop</option>
                            <option value="Rock">Rock</option>
                            <option value="Indie">Indie</option>
                            <option value="Rap">Rap</option>
                            <option value="R&B">R&B</option>

                        </Form.Select>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="Location">
                        <Form.Label className="text-white filter-container">Location:</Form.Label>
                        <Form.Select aria-label="Location filter" defaultValue={location} onChange={handleLocation} className="btn btn-info" style={{ width: "100px" }}>

                            <option value="All">All</option>
                            <option value="HUB">HUB</option>
                            <option value="Bus Stop">Bus Stop</option>
                            <option value="Mary Gates">Mary Gates</option>
                            <option value="Library">Library</option>
                            <option value="IMA">IMA</option>

                        </Form.Select>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="Activity">
                        <Form.Label className="text-white filter-container">Activity:</Form.Label>
                        <Form.Select aria-label="Activity filter" defaultValue={activity} onChange={handleActivity} className="btn btn-info" style={{ width: "100px" }}>

                            <option value="All">All</option>
                            <option value="Studying">Studying</option>
                            <option value="Working Out">Working Out</option>
                            <option value="Social">Social</option>
                            <option value="Commuting">Commuting</option>
                            <option value="Eating">Eating</option>

                        </Form.Select>
                    </Form.Group>

                </div>
                <div className="post">{samplePost}</div>
            </main>
        </div>
    );
}