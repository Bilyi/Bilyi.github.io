import React from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhotoVideo, faFile, faLink, faShare, faClock, faSignInAlt, togg } from '@fortawesome/free-solid-svg-icons'

const MenuItem = ({ page, location }) => {
    return (
        <li className="menu-item">
            <NavLink
                exact to={page.id ? page.id : ''}
                className={page.id === location ? 'active' : ''}
            >
                { page.id === 'files' && <FontAwesomeIcon icon={faFile}/> }
                { page.id === 'photos' && <FontAwesomeIcon icon={faPhotoVideo}/> }
                { page.id === 'sharing' && <FontAwesomeIcon icon={faShare}/> }
                { page.id === 'links' && <FontAwesomeIcon icon={faLink}/> }
                { page.id === 'events' && <FontAwesomeIcon icon={faClock}/> }
                { page.id === 'get_started' && <FontAwesomeIcon icon={faSignInAlt}/> }
                <span>{page.name}</span>
            </NavLink>
        </li>
    )
};

export default MenuItem;