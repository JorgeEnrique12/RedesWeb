import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import firebase from 'firebase';

firebase.initializeApp({
    apiKey: "AIzaSyAisukSer6Fe_Myl-URX7mr0AQ45YFipxk",
    authDomain: "project121212.firebaseapp.com",
    databaseURL: "https://project121212.firebaseio.com",
    projectId: "project121212",
    storageBucket: "project121212.appspot.com",
    messagingSenderId: "367487044972"
})
ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
