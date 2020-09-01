import React, { useEffect } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getPhotos, actionSort } from '../../state/photos/actions';
import PhotoItem from './photo-item';
import PhotosJson from '../../../../data/photos';

const Photos = ({ getPhotos, photos, actionSort }) => {
    const { items, sortBy } = photos;
    const getItems = async () => {
        try {
            getPhotos(PhotosJson);
        }
        catch (e) {
            console.log('error', e);
        }
    };

    useEffect(() => {
        getItems();
    }, []);

    const sortByProp = (e) => {
        e.preventDefault();
        const id = e.target.id;
        if(sortBy === id) {
            return;
        }
        actionSort(id);
    };

    return (
        <div className="page-container">
            <h3 className="page-title">Photos</h3>
            <div className="sort-buttons">
                <button
                    onClick={sortByProp}
                    id="file_name"
                    className={`sort-btn ${sortBy === 'file_name' ? 'active' : ''}`}
                >
                    Name
                </button>
                <button
                    onClick={sortByProp}
                    id="file_size"
                    className={`sort-btn ${sortBy === 'file_size' ? 'active' : ''}`}
                >
                    Size
                </button>
                <button
                    onClick={sortByProp}
                    id="last_modified"
                    className={`sort-btn ${sortBy === 'last_modified' ? 'active' : ''}`}
                >
                    Modified
                </button>
            </div>
            <div className="photos-container">
            { Object.keys(items).length ? (
                Object.keys(items).map(photo => {
                    return <PhotoItem key={items[photo].id} photo={items[photo]}/>;
                })) : (
                    <div>No any items</div>
                )
            }
            </div>
        </div>
    )
};

const mapStateToProps = state => {
    return {
        photos: state.photos
    };
};

const mapDispatchToProps = dispatch => {
    return {
        getPhotos: bindActionCreators(getPhotos, dispatch),
        actionSort: bindActionCreators(actionSort, dispatch)
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Photos);
