import React, { useState } from 'react';
import { ReactDOM } from 'react-dom/client';

//import your components here:
import { Homepage } from './Homepage.js';
import { Feed } from './Feed.js';
import { Form } from './Form.js';

export default function App() {
  //call your components here:
  return (
    <Homepage />
    // <Feed />
    <Form />
  );
}


