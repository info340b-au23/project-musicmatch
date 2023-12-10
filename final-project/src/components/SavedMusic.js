import React from 'react';

export default function SavedMusic(props) {
    const savedPosts = props.data || [];

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
        <div>
            {savedMusicList}
        </div>
    );
}