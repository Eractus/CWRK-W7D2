import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root.jsx';
import { allTodos } from './reducers/selectors';

document.addEventListener('DOMContentLoaded', () => {
  const rootElement = document.getElementById("content");
  const store = configureStore();
  window.allTodos = allTodos(store.getState());
  ReactDOM.render(<Root store={ store }/>, rootElement);
});
