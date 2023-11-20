import React from 'react';

export function Aboutus() {
    return (
        <div className="aboutus">
            {/* Navbar */}
            <nav className="navbarAllPages">
                <ul>
                    <li><a href="./src/Homepage.js"><span className="material-symbols-outlined">Home</span></a></li>
                    <li><a href="./src/Aboutus.js">About Us</a></li>
                    <li><a href="./src/Feed.js">Feed</a></li>
                    <li><a href="./src/UserProfile.js">Profile</a></li>
                </ul>
            </nav>

            {/* Body */}
            <body>

                {/* Header */}
                <header>
                    <h1 className="musicmatch">MUSICMATCH</h1>
                    <p>Come connect on UW campus with music</p>
                </header>

                {/* Main Content */}
                <main>

                    {/* About the Problem Space */}
                    <section>
                        <h2> About the Problem Space:</h2>
                        <p> We want to design an app that creates a space for people to share, connect, and support each other through
                            music. Joining college can be challenging and it can feel hard to find ways to connect with people from a
                            variety of backgrounds. Music, however, is a universal language. It allows us to share how we’re
                            feeling, connect over new sounds, and create a shared experience. Music can also work as a form of
                            therapy. It can help us feel safe, remind us of home, and help us complete tasks such as studying for
                            a project or cleaning the house. Overall, music is a powerful tool for connection and collaboration
                            which is why we want to help create a space that supports students socially in a way that supports
                            connection outside of the pressures of typical social media apps. </p>


                        <p> An information technology problem in the space is the challenge with current social media apps.
                            There are a lot of spaces for students to connect with each other such as Instagram, Snapchat,
                            Discord, etc however all of those spaces can also be overwhelming and hard to know what to post
                            or share. Especially with social media apps like Instagram and Tik Tok, there can be a lot of
                            pressure to show something cool you're doing or get a certain amount of likes. With our app we
                            want to encourage a space that involves sharing playlists, finding new music, and linking this
                            to where you are on campus and what you may be up to even if that's just working out at the
                            IMA or studying at Ode. One previous existing attempt to solve this problem is
                            <a href="https://musicmatch.net/"> MusicMatch for Artists</a> which helps artists match music
                            and evolve their own music style. However this focuses on matching and encouraging music from
                            an artists perspective where we want to focus on an app for students and sharing music and
                            playlists that already exist.</p>

                    </section>

                    {/* About the App & Map */}
                    <section>
                        <h2> About the App: </h2>
                        <p>The users of MusicMatch are students at UW who use Spotify to listen to music, and are looking to
                            connect to fellow students through shared music interests. This app may increase visibility to minority
                            groups by promoting music from different cultures and languages.</p>

                        <p>One significant feature of MusicMatch is that users can upload music they are listening to, along with
                            their activity and location on campus. For example, a user may upload that they are listening to an
                            “instrumental study” playlist while studying at Odegaard Library. The playlist/song that the user listens to
                            is linked to Spotify, so other users can access it as well. The second significant feature is an interactive
                            map that displays all users’ uploaded music around campus. Users can click on different uploads and add music
                            they like to their Spotify playlists. The map includes a filtering capability, where users can filter uploads
                            on the map based on activity (eg. studying, gym, walking, groceries) and location (eg. Suzzallo Library, IMA,
                            Mary Gates Hall). Another feature of MusicMatch is creating a user profile, which includes UW email and password
                            authentication for security, a username, and top music genres. This profile is displayed publicly when a user
                            uploads their music, and the map is automatically filtered to display music based on the user’s preferences.</p>

                        <p> Users will primarily be viewing a static map using a <a href="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY_HERE&callback=initMap&libraries=&v=weekly">
                            Google Maps API</a>. Music note markers on the map will represent posts where users have shared the song they are
                            listening to at that location. Each post will be likable by other users and include an image of the album cover from Spotify,
                            the artist’s name, the song name, the poster’s name, and a set of tags the poster has attached to the song. Users will
                            also have a function to filter the posts they are seeing by tag. Categories of filters will include genre, activity type, and
                            group size.</p>

                        <p >College students use music to accompany most everything they do, from studying to exercising to completing
                            chores. Since music has the power to connect people, MusicMatch allows users to share what they’re listening to while
                            doing various activities, and add new music from other users to their playlists. This sharing of music allows users to discover
                            new music from different cultures and languages, providing more visibility and acceptance of diversity. With the interactive
                            map, users can physically connect with each other by meeting up at UW locations to participate in shared activities together.
                            This allows connectivity beyond the app, bringing students together without the complexities of existing social media apps.</p>
                    </section>

                    {/* About the Designers */}
                    <section>
                        <h2> About the Designers: </h2>

                        <p>This is a design for INFO 340 - Web Development.</p>
                        <p>Jasmine Losovsky</p>
                        <p> Lorem ipsum dolor sit amet. Qui odio sunt ut facilis voluptas sed rerum porro? Ea quae eius quo deserunt
                            recusandae quilaborum quia et consequatur repellendus At nesciunt quia cum nisi praesentium.</p>

                        <p>Kylah Moon</p>
                        <p> Lorem ipsum dolor sit amet. Qui odio sunt ut facilis voluptas sed rerum porro? Ea quae eius quo deserunt
                            recusandae quilaborum quia et consequatur repellendus At nesciunt quia cum nisi praesentium.</p>

                        <p>Jessica Wang</p>
                        <p> Lorem ipsum dolor sit amet. Qui odio sunt ut facilis voluptas sed rerum porro? Ea quae eius quo deserunt
                            recusandae quilaborum quia et consequatur repellendus At nesciunt quia cum nisi praesentium.</p>

                        <p>Anu Ghosh</p>
                        <p> Lorem ipsum dolor sit amet. Qui odio sunt ut facilis voluptas sed rerum porro? Ea quae eius quo deserunt
                            recusandae quilaborum quia et consequatur repellendus At nesciunt quia cum nisi praesentium.</p>
                    </section>
                </main>
            </body>

            {/* Footer */}
            <footer className="footerAllPages">
                <div className="container">
                    <p><a href="mailto:email@musicmatch.uw.edu"><span className="material-icons">email</span> email@musicmatch.uw.edu</a></p>
                    <p><a href="tel:555-123-4567"><span className="material-icons">phone</span> 555-123-4567</a></p>
                    <p>&copy; MusicMatch 2023</p>
                </div>
            </footer>
        </div>
    );
}
