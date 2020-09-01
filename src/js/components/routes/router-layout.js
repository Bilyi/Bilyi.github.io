import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import Main from './main';

const LayoutRoute = ({component: Component, ...rest}) => {
    return (
        <Route {...rest} render={matchProps => (
            <Main>
                <Component {...matchProps} />
            </Main>
        )} />
    )
};

export default LayoutRoute;