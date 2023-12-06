import React from 'react';

export default function SavedPosts(props) {
    const savedPosts = props.data;

    return (
        <div className="savedPost">
            <h2 className="sub-header">Saved Songs</h2>
            <div className="saved-songs">
                {savedPosts.map((post) => (
                    <div key={post.ID} className="col-12 col-md-4">
                        <div className="card">
                            <div className="card-body">
                                <h2 className="song-name">{post.songTitle}</h2>
                                <h3 id="artist">{post.songArtist}</h3>
                                <button className="genre">{post.genre}</button>
                                <button className="location">{post.Location}</button>
                                <button className="activity">{post.activity}</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

