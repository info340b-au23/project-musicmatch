import React, { useState } from 'react';
import { updateProfile } from 'firebase/auth';
import { getStorage, ref as storageRef, uploadBytes, getDownloadURL, deleteObject } from 'firebase/storage';

export async function UploadImage(fileObject)
{
    if (fileObject !== null)
    {
        // Generate unique filename
        const uuid = require("uuid");
        const id = uuid.v4();

        const storage = getStorage(undefined, "gs://info-340-final-8c670.appspot.com");
        const storageReference = storageRef(storage, 'images/' + id + "_" + fileObject.name);

        // Upload the image to Firebase Storage
        await uploadBytes(storageReference, fileObject);

        // Get the download URL of the uploaded image
        const downloadImage = await getDownloadURL(storageReference);
        return downloadImage;
    }

    return null;
}

export async function DeleteImage(fileName)
{
    if (fileName !== null)
    {
        const storage = getStorage(undefined, "gs://info-340-final-8c670.appspot.com");
        const storageReference = storageRef(storage, 'images/' + fileName);
        await deleteObject(storageReference);
    }
}

export function DisplayImage({handleImageChange}) {
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