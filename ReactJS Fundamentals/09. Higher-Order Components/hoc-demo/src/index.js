import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './bootstrap.min.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import BookList from './components/BookList';
import StarWarsList from './components/StarWarsList';



ReactDOM.render(
    <App />
   , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();