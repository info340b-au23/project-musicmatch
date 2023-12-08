import React, { useState } from 'react';
import { UploadAndDisplayImage } from './UploadImage.js';
import { getDatabase, ref, onValue, set as firebaseSet, push } from 'firebase/database';

export function Form() {
    const [formData, setFormData] = useState({
        songName: "",
        artistName: "",
        genres: [],
        location: [],
        activity: [],
    });

    const [selectedGenres, setSelectedGenres] = useState([]);
    const [selectedLocations, setSelectedLocations] = useState([]);
    const [selectedActivities, setSelectedActivities] = useState([]);

    const handleInputChange = (input) => {
        const { name, value } = input.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleGenreChange = (genre) => {
        const isSelected = selectedGenres.includes(genre);

        if (isSelected) {
            // if genre is already selected, remove it
            setSelectedGenres(selectedGenres.filter((g) => g !== genre));
        } else {
            // if genre is not selected, add it
            setSelectedGenres([...selectedGenres, genre]);
        }

        //update the formData state with the selected genres
        setFormData({ ...formData, genres: selectedGenres });
    };

    const handleLocationChange = (location) => {
        const isSelected = selectedLocations.includes(location);

        if (isSelected) {
            setSelectedLocations(selectedLocations.filter((loc) => loc !== location));
        } else {
            setSelectedLocations([...selectedLocations, location]);
        }

        //update the formData state with the selected locations
        setFormData({ ...formData, location: selectedLocations });
    };


    const handleActivityChange = (activity) => {
        const isSelected = selectedActivities.includes(activity);

        if (isSelected) {
            setSelectedActivities(selectedActivities.filter((act) => act !== activity));
        } else {
            setSelectedActivities([...selectedActivities, activity]);
        }

        //update the formData state with the selected activities
        setFormData({ ...formData, activity: selectedActivities });
    };

    const db = getDatabase();

    const handleSubmit = (event) => {
        event.preventDefault();

        const postData = {
            songTitle: formData.songName,
            songArtist: formData.artistName,
            genre: selectedGenres.join(', '),
            Location: formData.location.join(', '),
            activity: formData.activity.join(', '),
            image: formData.image
        };
        push(postData)
            .then(() => {
                console.log('Submitted');
                setFormData({
                    songName: '',
                    artistName: ''
                })
                setSelectedGenres([]);
            })
            .catch((error) => {
                console.error('Error: ', error);
            })

        /*  console.log("Form submitted:", {
             ...formData,
             genres: selectedGenres,
             location: selectedLocations,
             activity: selectedActivities,
         });
 
         //reset the form after submission
         setFormData({
             songName: "",
             artistName: "",
             genres: [],
             location: [],
             activity: []
         });
         setSelectedGenres([]);
         setSelectedLocations([]);
         setSelectedActivities([]); */
    };

    return (
        <div className="form">
            <header>
                <h1 className="size">Post</h1>
            </header>
            <main>
                <form onSubmit={handleSubmit}>
                    <div className="form">
                        <h2 className="size">Song Details</h2>
                        <p>
                            <label htmlFor="songName" className="sizeTwo">
                                Song Name:{" "}
                            </label>
                            <div>
                                <input
                                    type="text"
                                    name="songName"
                                    value={formData.songName}
                                    onChange={handleInputChange}
                                    className="form-inputs"
                                />
                            </div>
                        </p>
                        <p>
                            <label htmlFor="artistName" className="sizeTwo">
                                Artist Name:{" "}
                            </label>
                            <div>
                                <input
                                    type="text"
                                    name="artistName"
                                    value={formData.artistName}
                                    onChange={handleInputChange}
                                    className="form-inputs"
                                />
                            </div>
                        </p>
                        <p>
                            <label htmlFor="genres" className="sizeTwo">
                                Genres:{" "}
                            </label>
                            <div>
                                <label className="sizeThree">
                                    <input
                                        type="checkbox"
                                        name="pop"
                                        checked={selectedGenres.includes("pop")}
                                        onChange={() => handleGenreChange("pop")}
                                    />
                                    Pop
                                </label>
                                <label className="sizeThree">
                                    <input
                                        type="checkbox"
                                        name="rock"
                                        checked={selectedGenres.includes("rock")}
                                        onChange={() => handleGenreChange("rock")}
                                    />
                                    Rock
                                </label>
                                <label className="sizeThree">
                                    <input
                                        type="checkbox"
                                        name="indie"
                                        checked={selectedGenres.includes("indie")}
                                        onChange={() => handleGenreChange("indie")}
                                    />
                                    Indie
                                </label>
                                <label className="sizeThree">
                                    <input
                                        type="checkbox"
                                        name="rap"
                                        checked={selectedGenres.includes("rap")}
                                        onChange={() => handleGenreChange("rap")}
                                    />
                                    Rap
                                </label>
                                <label className="sizeThree">
                                    <input
                                        type="checkbox"
                                        name="r&b"
                                        checked={selectedGenres.includes("r&b")}
                                        onChange={() => handleGenreChange("r&b")}
                                    />
                                    R&B
                                </label>
                            </div>
                        </p>
                        <h2 className="size">More Details</h2>
                        <p>
                            <label htmlFor="location" className="sizeTwo">
                                Location:{" "}
                            </label>
                            <div>
                                <label className="sizeThree">
                                    <input
                                        type="checkbox"
                                        name="HUB"
                                        checked={selectedLocations.includes("HUB")}
                                        onChange={() => handleLocationChange("HUB")}
                                    />
                                    HUB
                                </label>
                                <label className="sizeThree">
                                    <input
                                        type="checkbox"
                                        name="bus stop"
                                        checked={selectedLocations.includes("bus stop")}
                                        onChange={() => handleLocationChange("bus stop")}
                                    />
                                    Bus Stop
                                </label>
                                <label className="sizeThree">
                                    <input
                                        type="checkbox"
                                        name="Mary Gates"
                                        checked={selectedLocations.includes("Mary Gates")}
                                        onChange={() => handleLocationChange("Mary Gates")}
                                    />
                                    Mary Gates
                                </label>
                                <label className="sizeThree">
                                    <input
                                        type="checkbox"
                                        name="Library"
                                        checked={selectedLocations.includes("Library")}
                                        onChange={() => handleLocationChange("Library")}
                                    />
                                    Library
                                </label>
                                <label className="sizeThree">
                                    <input
                                        type="checkbox"
                                        name="IMA"
                                        checked={selectedLocations.includes("IMA")}
                                        onChange={() => handleLocationChange("IMA")}
                                    />
                                    IMA
                                </label>
                            </div>
                        </p>
                        <p>
                            <label htmlFor="activity" className="sizeTwo">
                                Activity:{" "}
                            </label>
                            <div>
                                <label className="sizeThree">
                                    <input
                                        type="checkbox"
                                        name="Studying"
                                        checked={selectedActivities.includes("Studying")}
                                        onChange={() => handleActivityChange("Studying")}
                                    />
                                    Studying
                                </label>
                                <label className="sizeThree">
                                    <input
                                        type="checkbox"
                                        name="Working Out"
                                        checked={selectedActivities.includes("OWorking Out")}
                                        onChange={() => handleActivityChange("Working Out")}
                                    />
                                    Working Out
                                </label>
                                <label className="sizeThree">
                                    <input
                                        type="checkbox"
                                        name="Social"
                                        checked={selectedActivities.includes("Social")}
                                        onChange={() => handleActivityChange("Social")}
                                    />
                                    Social
                                </label>
                                <label className="sizeThree">
                                    <input
                                        type="checkbox"
                                        name="Commute"
                                        checked={selectedActivities.includes("Commute")}
                                        onChange={() => handleActivityChange("Commute")}
                                    />
                                    Commute
                                </label>
                                <label className="sizeThree">
                                    <input
                                        type="checkbox"
                                        name="Eating"
                                        checked={selectedActivities.includes("Eating")}
                                        onChange={() => handleActivityChange("Eating")}
                                    />
                                    Eating
                                </label>
                            </div>
                        </p>
                        <p>
                            <label htmlFor="image-upload" className="sizeTwo">
                                Picture:{" "}
                            </label>
                            <div>
                                <UploadAndDisplayImage />
                            </div>
                        </p>
                    </div>
                    <button type="submit" className="submit-button">
                        Submit
                    </button>
                </form>
            </main>
        </div>
    );
}