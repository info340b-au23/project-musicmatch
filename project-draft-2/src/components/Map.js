import React from 'react';
import '../style.css';
import 'leaflet-markers';

export function Map() {
    let map = document.createElement('iframe');
        map.src = "https://snazzymaps.com/embed/547777";
        map.width = "75%";
        map.height = "600px";
        map.style.border = 'none';

    const marker = L.icon ({
        iconUrl: '../../project-draft-2/public/img/favicon.icon',
        iconSize: [32, 32],
        iconAnchor: [16, 32],
        popupAnchor: [0, -32]
    });

    map.addEventListener('click', function(event) {
        L.marker([event.latlng], { icon: marker }, addTo(map));
    });

    return (
        <main>
            {/* <section id="map">  */}
                <div id="map">

                </div>
            {/* </section> */}
        </main>
    );
}