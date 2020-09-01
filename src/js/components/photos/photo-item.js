import React from 'react';

const PhotoItem = ({ photo }) => {
    return (
        <div className="photo-container">
            <div className="photo-item">
                <img className="photo-img" src={photo.url} alt={photo.file_name} />
            </div>
            <div className="photo-name">
                <p>{photo.file_name}</p>
            </div>
            <div className="photo-size">
                <p>{`${(photo.file_size/1024).toFixed(2)} MB`}</p>
            </div>
        </div>
    )
};

export default PhotoItem;