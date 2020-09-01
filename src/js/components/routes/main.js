import React, { Fragment } from 'react';
import Menu from '../menu/menu';

const Main = ({ children }) => {
    const { match } = children.props;
    return (
        <Fragment>
            <Menu match={match}/>
            <Fragment>
                {children}
            </Fragment>
        </Fragment>
    )
};

export default Main;