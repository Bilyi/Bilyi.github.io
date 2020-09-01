import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { initStore } from './js/state/store';
import App from './js/components/app/app';
// import './css/style.scss';

const store = initStore();

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('app')
);