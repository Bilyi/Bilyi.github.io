import { SAVE_LOCATION } from './constants';

export const saveLocation = (path) => {
    return {
        type: SAVE_LOCATION,
        data: path
    };
};
