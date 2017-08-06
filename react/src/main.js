import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import BrowserRouter from 'react-router-dom';
import App from './containers/App';

document.addEventListener('DOMContentLoaded', () => {
  let reactElement = document.getElementById('app')

  if (reactElement) {
    ReactDOM.render(
      <App />,
      reactElement
    );
  }
})
