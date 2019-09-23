import React from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';

import Header from './common/header';
import Home from './pages/home';

export default class Router extends React.Component{
    render(){
        return(
            <div className='eu-container'>
                <HashRouter>
                    <Header />
                    
                    <Switch>
                        <Route exact path='/' component={Home} />
                    </Switch>
                </HashRouter>
            </div>
        )
    }
}
