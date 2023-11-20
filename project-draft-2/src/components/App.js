import React, { useState } from 'react';
import { ReactDOM } from 'react-dom/client';

//import your components here:
import { Homepage } from './Homepage.js';
import { Aboutus } from './Aboutus.js';
import { Feed } from './Feed.js';
import { userProfile } from './userProfile.js';
import { Form } from './Form.js';

export default function App() {
  //call your components here:
  return (
    <Homepage />
    // <Aboutus />
    // <Feed />
    // <userProfile />
    // <Form />
  );
}


