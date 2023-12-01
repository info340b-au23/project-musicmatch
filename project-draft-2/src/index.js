import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';

import './style.css'; //import css file!

//import json data file for Feed
import POST_DATA from './data/postsData.json'; 

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App data={POST_DATA} />
  </React.StrictMode>
);
