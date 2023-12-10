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
            </main>

            <Map />;
        </div>
    );
}
