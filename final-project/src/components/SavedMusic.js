import React, { useState, useEffect } from 'react';

export default function SavedMusic(props) {
    // Use local storage to get and set saved posts
    const getSavedPostsFromStorage = () => {
        const savedPostsString = localStorage.getItem('savedPosts');
        return savedPostsString ? JSON.parse(savedPostsString) : [];
    };

    const [savedPosts, setSavedPosts] = useState(getSavedPostsFromStorage);

    useEffect(() => {
        // Save posts to local storage whenever the array changes
        localStorage.setItem('savedPosts', JSON.stringify(savedPosts));
    }, [savedPosts]);

    const savedMusicList = savedPosts.map((userData) => (
        <div key={userData.id}>
            <div className="row">
                {/* song name and artist */}
                <div className="col-12 filter-info text-center">
                    <span className="filter-item">
                        <div>
                            Song name: {userData.songTitle}
                        </div>
                    </span>
                    <span className="filter-item">
                        <div>
                            Artist: {userData.songArtist}
                        </div>
                    </span>
                </div>
            </div>
        </div>
    ));

    return (
        <div className="feed">
            <main>
                <div>
                    <h1 className="musicmatch-header">MUSICMATCH</h1>
                    <h3 className="header-2">See everyone's posts!</h3>
                </div>

                <div>
                    {savedMusicList}
                </div>
            </main>
        </div>
    );
}