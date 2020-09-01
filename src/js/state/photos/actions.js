import { GET_IMAGES, SORT_BY } from './constants';

export const getPhotos = (data) => {
    return {
        type: GET_IMAGES,
        data: data
    };
};

export const actionSort = (id) => {
    return {
        type: SORT_BY,
        data: {
            id
        }
    };
};
