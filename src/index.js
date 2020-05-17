import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import Todolist from './todolist';

const APP = (
    <Provider store={store}>
        <Todolist />
    </Provider>
)

const rootElement = document.getElementById('root');

ReactDOM.render(APP, rootElement);