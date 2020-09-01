import { SAVE_LOCATION } from './constants';

const defaultState = {
    location: 'photos'
};

export default (state = defaultState, action) => {
    const { type, data } = action;

    switch (type) {
        case SAVE_LOCATION:
            return Object.assign({}, state, {
                location: data
            });
        default:
            return state;
    }
};
