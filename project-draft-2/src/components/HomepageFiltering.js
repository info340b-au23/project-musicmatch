import React from 'react';
import '../style.css';

export function HomepageFiltering() {
    return (
        <div className="filters">
            <h3>Filter By:</h3>
            <button className="genre">#genre</button>
            <button className="location">#location</button>
            <button className="mood">#mood</button>
            <button className="activity">#activity</button>
      </div>
    );
}