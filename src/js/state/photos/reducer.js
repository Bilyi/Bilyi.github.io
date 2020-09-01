import { GET_IMAGES, SORT_BY } from './constants';

const defaultState = {
    items: {},
    sortBy: '',
    totalSize: null
};

export default (state = defaultState, action) => {
    const { type, data } = action;

    switch (type) {
        case GET_IMAGES:
            let totalSize = data.reduce((accumulator, currentValue) => {
                return accumulator + currentValue.file_size;
            }, 0);
            totalSize = (totalSize/1024).toFixed(2);
            return Object.assign({}, state, {
                items: data,
                totalSize
            });
        case SORT_BY:
            const sortedPhotos = state.items.sort((a, b) => (a[data.id] > b[data.id]) ? 1 : -1);

            return Object.assign({}, state, {
                items: sortedPhotos,
                sortBy: data.id
            });
        default:
            return state;
    }
};
