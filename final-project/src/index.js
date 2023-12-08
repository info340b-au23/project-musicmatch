import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import { BrowserRouter } from 'react-router-dom'
import { initializeApp } from "firebase/app"; //added from firebase
import { getDatabase, ref, set as firebaseSet } from 'firebase/database';

//import CSS
import './style.css'; //import css file!

//import json data file for Feed
import DATA from './data/data.json';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyChR-uCZQrXIuC8l0QGQynq6D6z43cRXN8",
  authDomain: "react-chat-firebase1-temp.firebaseapp.com",
  projectId: "react-chat-firebase1-temp",
  storageBucket: "react-chat-firebase1-temp.appspot.com",
  messagingSenderId: "1052807428829",
  appId: "1:1052807428829:web:ab93f7be8ab5e149f47934"
};

// Initialize Firebase
initializeApp(firebaseConfig);

  // Test for changing Anu's username in Realtime database
  const db = getDatabase();
  const anuRef = ref(db, "users/anu");
  const newValForAnuUsername = "anughosh";
  firebaseSet(anuRef, newValForAnuUsername);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App data={DATA} />
    </ BrowserRouter>
  </React.StrictMode>
);
