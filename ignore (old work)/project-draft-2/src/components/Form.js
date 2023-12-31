import React, { useState } from 'react';
import { UploadAndDisplayImage } from './UploadImage.js';
import '../style.css';


export function Form() {
    const [formData, setFormData] = useState({
        songName: "",
        artistName: "",
        genres: [],
        location: [],
        activity: [],
    });

    const [selectedGenres, setSelectedGenres] = useState([]);

    const handleInputChange = (input) => {
        const { name, value } = input.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleGenreChange = (genre) => {
        const isSelected = selectedGenres.includes(genre);

        if (isSelected) {
            // Genre is already selected, remove it
            setSelectedGenres(selectedGenres.filter((g) => g !== genre));
        } else {
            // Genre is not selected, add it
            setSelectedGenres([...selectedGenres, genre]);
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        console.log("Form submitted:", {
            ...formData,
            genre: selectedGenres,
        });

        //reset the form after submission
        setFormData({
            songName: "",
            location: "",
            activity: ""
        });
        setSelectedGenres([]);
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
                                        checked={selectedGenres.includes("HUB")}
                                        onChange={() => handleGenreChange("HUB")}
                                    />
                                    HUB
                                </label>
                                <label className="sizeThree">
                                    <input
                                        type="checkbox"
                                        name="bus stop"
                                        checked={selectedGenres.includes("bus stop")}
                                        onChange={() => handleGenreChange("bus stop")}
                                    />
                                    bus stop
                                </label>
                                <label className="sizeThree">
                                    <input
                                        type="checkbox"
                                        name="Mary Gates"
                                        checked={selectedGenres.includes("Mary Gates")}
                                        onChange={() => handleGenreChange("Mary Gates")}
                                    />
                                    Mary Gates
                                </label>
                                <label className="sizeThree">
                                    <input
                                        type="checkbox"
                                        name="Library"
                                        checked={selectedGenres.includes("Library")}
                                        onChange={() => handleGenreChange("Library")}
                                    />
                                    Library
                                </label>
                                <label className="sizeThree">
                                    <input
                                        type="checkbox"
                                        name="IMA"
                                        checked={selectedGenres.includes("IMA")}
                                        onChange={() => handleGenreChange("IMA")}
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
                                        checked={selectedGenres.includes("Studying")}
                                        onChange={() => handleGenreChange("Studying")}
                                    />
                                    Studying
                                </label>
                                <label className="sizeThree">
                                    <input
                                        type="checkbox"
                                        name="Working Out"
                                        checked={selectedGenres.includes("OWorking Out")}
                                        onChange={() => handleGenreChange("Working Out")}
                                    />
                                    Working Out
                                </label>
                                <label className="sizeThree">
                                    <input
                                        type="checkbox"
                                        name="Social"
                                        checked={selectedGenres.includes("Social")}
                                        onChange={() => handleGenreChange("Social")}
                                    />
                                    Social
                                </label>
                                <label className="sizeThree">
                                    <input
                                        type="checkbox"
                                        name="Commute"
                                        checked={selectedGenres.includes("Commute")}
                                        onChange={() => handleGenreChange("Commute")}
                                    />
                                    Commute
                                </label>
                                <label className="sizeThree">
                                    <input
                                        type="checkbox"
                                        name="Eating"
                                        checked={selectedGenres.includes("Eating")}
                                        onChange={() => handleGenreChange("Eating")}
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