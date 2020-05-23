import React from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';

import Home from './layout/home'

const Router = () => {
    return(
        <HashRouter>
            <Switch>
                <Route exact path='/' component={Home} />
            </Switch>
        </HashRouter>
    )
}

export default Router;