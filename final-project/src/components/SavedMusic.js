import React, { useState, useEffect } from 'react';

export default function SavedMusic(props) {
  // Use local storage to get and set saved posts
  const getSavedPostsFromStorage = () => {
    const savedPostsString = localStorage.getItem('savedPosts');
    return savedPostsString ? new Set(JSON.parse(savedPostsString)) : new Set();
  };

  const [savedPosts, setSavedPosts] = useState(getSavedPostsFromStorage);

  useEffect(() => {
    // Save posts to local storage whenever the set changes
    localStorage.setItem('savedPosts', JSON.stringify([...savedPosts]));
  }, [savedPosts]);

  const savedMusicList = [...savedPosts].map((userData) => (
    <div key={userData.id} className="card mb-3">
      <div className="row">
        <div className="col-md-4">
          {/* You can add an image or other media here */}
          <img src={userData.image} className="img-fluid rounded-start savedMusic-image" alt="Song Cover" />
        </div>
        <div className="col-md-20">
          <div className="card-body">
            {/* song name and artist */}
            <h5 className="card-title">Song: {userData.songTitle}</h5>
            <p className="card-text">Artist: {userData.songArtist}</p>
            {/* Add more information as needed */}
          </div>
        </div>
      </div>
    </div>
  ));

  return (
    <div className="savedMusic">
      <main>
        <div>
          <h1 className="musicmatch-header">MUSICMATCH</h1>
          <h3 className="header-2">See everyone's posts!</h3>
        </div>
        <div className="container">
          <div className="row">
            <div className="col">{savedMusicList}</div>
          </div>
        </div>
      </main>
    </div>
  );
}