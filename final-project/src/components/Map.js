import React, { useState, useEffect } from 'react';

export function Map() {
    const [map, setMap] = useState('');

    useEffect(() => {
        const iframe = document.createElement('iframe');
        iframe.src = "https://snazzymaps.com/embed/551698";
        iframe.width = "75%";
        iframe.height = "600px";
        iframe.style.border = "none";

        //append the iframe content as a string to the map state
        setMap(iframe.outerHTML);

        //clean the iframe 
        return () => {
            if (iframe.parentNode) {
                iframe.parentNode.removeChild(iframe);
            }
        };
    }, []);

    return (
        <main>
            <div id="map" dangerouslySetInnerHTML={{ __html: map }} />
        </main>
    );
}