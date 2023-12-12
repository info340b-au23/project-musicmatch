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

  const savedMusicList = [...savedPosts].map((userData) => {
    // Check if userData exists and has necessary properties
    if (!userData) {
      return null; // Skip rendering this post if data is missing
    }

    return (
      <div key={userData.id} className="card mb-3">
        <div className="row">
          <div className="col-md-4">
            {userData.image && (
              <img
                src={userData.image}
                className="img-fluid rounded-start savedMusic-image"
                alt="Song Cover"
              />
            )}
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">Song: {userData.songTitle}</h5>
              <p className="card-text">Artist: {userData.songArtist}</p>
            </div>
          </div>
        </div>
      </div>
    );
  });


  return (
    <div className="savedMusic">
      <main>
        <div>
          <h1 className="musicmatch-header">MUSICMATCH</h1>
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