import React, { useState } from "react";
import '../style.css';

export function UploadAndDisplayImage() {
    const [selectedImage, setSelectedImage] = useState(null);

    return (
        <div className="upload-section">
            <h1 className="size">Upload Image Here:</h1>

            {selectedImage && (
                <div className="upload-image-container">
                    <img
                        alt="not found"
                        width={'250px'}
                        src={URL.createObjectURL(selectedImage)}
                    />
                    <br />
                    <button
                        className="remove-button"
                        onClick={() => setSelectedImage(null)}
                    >
                        Remove
                    </button>
                </div>
            )}

            <br />
            <br />

            <input
                type="file"
                name="myImage"
                onChange={(event) => {
                    console.log(event.target.files[0]);
                    setSelectedImage(event.target.files[0]);
                }}
            />
        </div>
    );
}