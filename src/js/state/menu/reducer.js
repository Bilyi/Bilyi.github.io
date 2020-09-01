import { GET_PHOTOS } from './constants';

const defaultState = {};

export default (state = defaultState, action) => {
    const { type, data } = action;

    switch (type) {
        case GET_PHOTOS:
            return Object.assign({}, state, data);
        default:
            return state;
    }
};
