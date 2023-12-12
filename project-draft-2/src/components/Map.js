import React from 'react';
import '../style.css';

export function Map() {
    var map = document.createElement('iframe');
        map.src="https://snazzymaps.com/embed/551698" 
        map.width="75%" 
        map.height="600px" 
        map.style="border:none;"
    return (
        <main>
            <div id="map">
                {map};
            </div>
        </main>
    );
}