import React from 'react';
import ReactDOM from 'react-dom';
import App from './Components/App/App'
import store from './Redux/store';
import './index.css';

console.log(store.getState())
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

