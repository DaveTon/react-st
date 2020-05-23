import React from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';

import Header from './common/header';
import Home from './layout/home';

const Router = () => {
    return(
        <HashRouter>
            <Header />
            
            <Switch>
                {/* <Route exact path='/' component={Home} /> */}
            </Switch>
        </HashRouter>
    )
}

export default Router;