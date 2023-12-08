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
  authDomain: "info-340-final-8c670-default-rtdb.firebaseio.com/",
  projectId: "info-340-final-8c670",
  storageBucket: "info-340-final-8c670-default-rtdb.appspot.com",
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
