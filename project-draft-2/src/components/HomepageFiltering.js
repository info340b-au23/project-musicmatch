import React from 'react';
import '../style.css';

export function HomepageFiltering() {
    return (
        <div class="filters">
            <h3>Filter By:</h3>
            <button class="genre">#genre</button>
            <button class="location">#location</button>
            <button class="mood">#mood</button>
            <button class="activity">#activity</button>
      </div>
    );
}