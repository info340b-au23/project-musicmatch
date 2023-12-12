import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getDatabase, ref, onValue } from 'firebase/database';

export default function UserProfile(props) {

    const data = props.data;
    const handleSaveClick = props.handleSaveClick;

    //filtering code to let the user filter on posts:
    const [location, setlocation] = useState("All");
    const [genre, setGenre] = useState("All");
    const [activity, setActivity] = useState("All");
    const [formData, setFormData] = useState([]);


    useEffect(() => {
        const db = getDatabase();
        const postsRef = ref(db, 'posts');

        onValue(postsRef, (snapshot) => {
            if (snapshot.exists()) {
                const data = snapshot.val();
               // const array = Object.values(data);
                setFormData(snapshot.exportVal());
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

    {/* filter by only user's posts */}
    var filteredPosts = Object.entries(formData).filter(([k,v]) => filterBy(v))
    const samplePost = filteredPosts
        .map((userData, index) => (
            <div id={userData[0]}>
                {/* User Posts */}
                <div key={index} className="col-12 col-md-4">
                <div className="container">
                <div className="row">
                    <div className="posts">
                            <div className="card">
                                <div className="card-body">
                                    <h2 className="song-name">Song name: {userData[1].songTitle}</h2>
                                    <h3 id="artist">Artist: {userData[1].songArtist}</h3>
                                    <img id="user-upload" src={userData[1].image} alt="user's activity" />
                                    <div className="col-12 more-info text-center">
                                        <div className="location">
                                            Location: {userData[1].Location}
                                        </div>
                                        <div className="genre">
                                            Genre: {userData[1].genre}
                                        </div>
                                        <div className="activity">
                                            Activity: {userData[1].activity}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                </div>

            </div>
        ));
    

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
                            <p id="username">music_lover21</p>
                            <p id="email">yaymusic@gmail.com</p>
                        </div>
                        <div className="buttons">
                            <Link to='/profile/form'><button id='song-form'>Create Post</button></Link>
                            <Link to='/savedMusic'><button id='profile-button'>Saved Music</button></Link>
                        </div>
                    </div>

                    <h2 className="sub-header">My Posts</h2>
                    <div className="row">
                        {samplePost}
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
