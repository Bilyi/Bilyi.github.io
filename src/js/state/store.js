import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import photos from './photos/reducer';
import routes from './routes/reducer';

const reducers = {
    photos,
    routes
};

export const initStore = (initialState = {}) => {
    const reducer = combineReducers(reducers);
    const composeEnhancers =window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
    const store = createStore(
        reducer,
        initialState,
        composeEnhancers(applyMiddleware(thunk))
    );
    window.store = store;

    return store;
};