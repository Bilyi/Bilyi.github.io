import React, { Fragment, useEffect } from 'react';
import { PAGES } from '../../state/menu/constants';
import MenuItem from './menu-item';
import { bindActionCreators } from 'redux';
import { saveLocation } from '../../state/routes/actions';
import { connect } from 'react-redux';

const Menu = ({ match, routes, photos, saveLocation }) => {
    const { location } = routes;
    const { totalSize } = photos;
    useEffect(() => {
        if(match.path === '/') {
            saveLocation('photos');
        } else {
            saveLocation(match.path.replace('/', ''));
        }
    }, [match]);

    return (
        <Fragment>
            <div className="menu-container">
                <ul className="menu">
                    { PAGES.map(page => { return <MenuItem location={routes.location} key={page.id} page={page}/>; })}
                </ul>
                { location === 'photos' && totalSize &&
                    <div className="total-size">
                        <p>{`Total size of ${routes.location}: `}</p>
                        <p>{`${totalSize} MB`}</p>
                    </div>
                }
            </div>
        </Fragment>
    )
};

const mapStateToProps = state => {
    return {
        photos: state.photos,
        routes: state.routes
    };
};

const mapDispatchToProps = dispatch => {
    return {
        saveLocation: bindActionCreators(saveLocation, dispatch)
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Menu);
