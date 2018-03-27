import React from 'react';
import { Provider } from 'react-redux';
import App from './app';
import TodoForm from './todo_list/todo_form';

const Root = ({ store }) => (
  <Provider store={ store }>
    <App />
  </Provider>
);

export default Root;
