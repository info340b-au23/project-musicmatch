import React from 'react';
import '../style.css';

export function Map() {
    map.addListener('click', function(event) {
        addMarker(event.latLng);
      });

    return (
        <main>
            {/* <section id="map">  */}
                <div id="map">
                    <iframe
                        src="https://snazzymaps.com/embed/547777"
                        width="75%"
                        height="600px"
                        style={{ border: 'none' }}
                    ></iframe>
                </div>
            {/* </section> */}
        </main>
    );
}