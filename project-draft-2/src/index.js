import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';

import { initializeApp } from "firebase/app";

import './style.css'; //import css file!

//import json data file for Feed
import POST_DATA from './data/postsData.json'; 

const firebaseConfig = {
  apiKey: "AIzaSyDpYAuvthEI4ZAFO9i1v5oBMd-mGRuUk9I",
  authDomain: "info340-final-f5744.firebaseapp.com",
  projectId: "info340-final-f5744",
  storageBucket: "info340-final-f5744.appspot.com",
  messagingSenderId: "680139155920",
  appId: "1:680139155920:web:11bb332b69259b9423b1d5"
};

const app = initializeApp(firebaseConfig);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App data={POST_DATA} />
  </React.StrictMode>
);
