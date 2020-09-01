import React from 'react';
import Photos from '../photos/photos';
import { BrowserRouter, Switch } from 'react-router-dom';
import LayoutRoute from '../routes/router-layout';
import Files from '../files/files';
import Sharing from '../sharing/sharing';
import Links from '../links/links';
import Events from '../events/events';
import GetStarted from '../get-started/get-started';

import '../../../css/style.scss';

const App = () => {
    return (
        <div className="container">
            <BrowserRouter>
                <Switch>
                    <LayoutRoute exact path="/" component={Photos}/>
                    <LayoutRoute path="/files" component={Files}/>
                    <LayoutRoute path="/photos" component={Photos}/>
                    <LayoutRoute path="/sharing" component={Sharing}/>
                    <LayoutRoute path="/links" component={Links}/>
                    <LayoutRoute path="/events" component={Events}/>
                    <LayoutRoute path="/get_started" component={GetStarted}/>
                </Switch>
            </BrowserRouter>
        </div>
    )
};

export default App;