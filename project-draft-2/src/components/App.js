import React, { useState } from 'react';
import { ReactDOM } from 'react-dom/client';

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
    // <Homepage />

    // PAGE #2:
    // <Aboutus />

    //PAGE #3:
    //<Feed data={data} />

    /*PAGE #4:*/
    <UserProfile props={data}/>
    //<Form />
  );
}


