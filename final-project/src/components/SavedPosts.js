import React from 'react';
import { NavLink } from 'react-router-dom';

export default function SavedPosts(props) {
    const data = props.data;
    const savedMusic = data.map((userData) => (
        /* mapping to diplay each user's profile name and icon, image posted, and comments */

    ));

    return (
        <div className="savedPost">
            {/* Main Content */}
            <main>
                <h1 className="musicmatch-header">MUSICMATCH</h1>

                <div id="filtering">
                    
                </div>

                {/* Sample Post */}
                <div className="post">
                    {savedMusic}
                </div>
            </main>
        </div>
    );
}