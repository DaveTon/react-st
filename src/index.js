import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import Router from './router';
import './resource/scss/essential_ui.scss';

const APP = (
    <Provider store={store}>
        <Router />
    </Provider>
)

const rootElement = document.getElementById('root');

ReactDOM.render(APP, rootElement);

