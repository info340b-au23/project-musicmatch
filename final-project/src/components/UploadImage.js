import React, { useState } from 'react';
import { updateProfile } from 'firebase/auth';

export function UploadAndDisplayImage({ handleImageChange}) {
    const [selectedImage, setSelectedImage] = useState(null);

    const handleInputChange = (e) => {
        const img = e.target.files[0];
        setSelectedImage(img);
        handleImageChange(img);
    };

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
                onChange={handleInputChange}
            />
        </div>
    );
}