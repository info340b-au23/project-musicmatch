import React from 'react';
import { Map } from './Map.js';

export default function Homepage() {
    return (
        <div className="homepage">
            <main>
                <header>
                    <div className="container">
                        <h1 className="musicmatch-header">MUSICMATCH</h1>
                        <p className="motto">See what your friends are listening to!</p>
                    </div>
                </header>
                <Map />;
                <div className="instructions">
                    <p>Instructions:</p>
                    <p>To use our app, navigate to the User Profile to create a post. Your post will show up on your Profile, and will show up with others' posts on the Feed. To save a song, click the save button on Feed, and navigate to Saved Music on your profile to view these songs. To filter posts, use the drop-down menus at the top of Feed.</p>
                </div>
            </main>


        </div>
    );
}
