import React from 'react';
import '../style.css';

export function Map() {
    return (
        <main>
            <section id="map"> 
                <p style="text-align: center;"><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2687.4653558299697!2d-122.30990247372289!3d47.65595548456817!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x549014929d8535eb%3A0x6b742c7901b82ba3!2sUniversity%20of%20Washington!5e0!3m2!1sen!2sus!4v1698033826670!5m2!1sen!2sus" width="800" height="600" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe></p>
            </section>
        </main>
    );
}