import React, { useEffect, useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { getDatabase, ref, get } from 'firebase/database';

import '../style.css'; //import the custom CSS file

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
// import FEED_EXAMPLE_DATA from '../data/postsData.json';

export default function App(props) {
  //data that will be used in Feed to show an EXAMPLE of the feed
  // const data = FEED_EXAMPLE_DATA;
  //data that will be used in AboutUs
  const infoAboutUs = INFO_ABOUT_US;
  //we import the realtime data in index.js
  let users = props.data;

  const [postData, setPostData] = useState([]);
  useEffect(() => {
    const db = getDatabase()
    const postsRef = ref(db, "posts");

    get(postsRef)
      .then((snapshot) => {
        if (snapshot.exists()) {
          //const data = snapshot.val();
          //const array = Object.values(data);
          setPostData(snapshot);
        } else {
          console.log('No data');
        }
      })
      .catch((error) => {
        console.log('Error:', error);
      });
  }, []);
  

  const [currentUser, setCurrentUser] = useState(users[0]);

  // set state for formData
  const [formData, setFormData] = useState(null);

  const handleFormSubmit = (data) => {
    setFormData(data);
  }

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

        <Route path='/home' element={<Homepage />} />
        <Route path='/feed' element={<Feed data={postData} />} />
        <Route path='/profile' element={<UserProfile formData={formData} />} />
        <Route path='/profile/form' element={<Form onSubmit={handleFormSubmit} />} />
        <Route path="/savedMusic" component={<SavedMusic data={postData} />} />
        {/*change route to home!*/}
        <Route path="*" element={<Navigate to='/home' />} />
      </Routes>

      <Footer />
    </>

  );
}
