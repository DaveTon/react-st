import React from 'react';
import ReactDOM from 'react-dom';
import Todolist from './Todolist';
import { Provider } from 'react-redux';
import store from './store';

const APP = (
  <Provider store={store}>
    <Todolist />
  </Provider>
)

ReactDOM.render(
  APP,
  document.getElementById('root')
);