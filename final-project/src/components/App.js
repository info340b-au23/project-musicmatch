import React, { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import firebase from 'firebase/app';
import { getDatabase, ref, onValue, set as firebaseSet } from 'firebase/database';

import '../style.css'; //import the custom CSS file

//import songdata from '../data/searchpagedata.json';
//import { Filter } from './Filter.js';

//import your components here:
import Homepage from './Homepage.js';
import Aboutus from './Aboutus.js';
import ContributorDetail from './ContributorDetail.js';
import ContributorList from './ContributorList.js';
import Feed from './Feed.js';
import UserProfile from './UserProfile.js';
import SavedMusic from './SavedMusic';
import { Form } from './Form.js';
import { Navbar } from './Navbar.js';
import { Footer } from './Footer.js';

import INFO_ABOUT_US from '../data/infoAboutus.json';
import FEED_EXAMPLE_DATA from '../data/postsData.json';

export default function App(props) {
  //data that will be used in Feed to show an EXAMPLE of the feed
  const data = FEED_EXAMPLE_DATA;
  //data that will be used in AboutUs
  const infoAboutUs = INFO_ABOUT_US;
  //we import the realtime data in index.js
  let users = props.data;

  //to control the feed filtering
  const [filterCriteria, setFilterCriteria] = useState({
    location: "",
    genre: "",
    activity: ""
  });

  let applyFilter = (location, genre, activity) => {
    setFilterCriteria({
      location: location,
      genre: genre,
      activity: activity
    });
  };

  // Test for changing Anu's username in Realtime database
  const db = getDatabase();
  const anuUsernameRef = ref(db, "users/anu/username");
  const newValForAnuUsername = "anughosh";
  firebaseSet(anuUsernameRef, newValForAnuUsername);

  const [currentUser, setCurrentUser] = useState(users[0]);

  //call components here:
  return (
    <>
      <Navbar />

      <Routes>
        <Route path='/aboutUs' element={<Aboutus infoAboutUs={infoAboutUs} />}>
          {/*route for information a specific person out of the 4 contributors*/}
          <Route path=":contributorName" element={<ContributorDetail />} />
          {/*child route*/}
          <Route index element={<ContributorList infoAboutUs={infoAboutUs} />} />
        </Route>

        {/* <Route path="/filter" element={<Filter props={songdata}/>}/>*/}

        <Route path='/home' element={<Homepage />} />
        <Route path='/feed' element={<Feed
          data={data}
          filterCriteria={filterCriteria}
          setFilterCriteria={setFilterCriteria}
          applyFilterCallback={applyFilter}
        />} />
        <Route path='/profile' element={<UserProfile />} />
        <Route path='/profile/form' element={<Form />} />
        <Route path="/savedMusic" component={<SavedMusic data={data} />} />
        {/*change route to home!*/}
        <Route path="*" element={<Navigate to='/home' />} />
      </Routes>

      <Footer />
    </>

  );
}
