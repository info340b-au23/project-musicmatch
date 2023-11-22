import React, { useState } from 'react';
import { ReactDOM } from 'react-dom/client';

import '../style.css'; //import the custom CSS file

//import your components here:
import { Homepage } from './Homepage.js';
import { Aboutus } from './Aboutus.js';
import { Feed } from './Feed.js';
import { UserProfile } from './UserProfile.js';
import { Form } from './Form.js';

export default function App(props) {
  //props for data that will be used in Feed
  const data = props.data;

  //call your components here:
  return (
    //these are the 4 main pages that will be shown to the users:
    // PAGE #1:
    <Homepage />

    // PAGE #2:
    // <Aboutus />

    // PAGE #3:
    // <Feed data={data} />

    //PAGE #4:
    // <UserProfile data={data} />
    // the form is our interactive part. in the final, we will use the router to call 
    // this component in the UserProfile, but for now, we put it here for interactivity
  //  <Form />
  );
}


