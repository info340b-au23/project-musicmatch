import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import '../style.css'; //import the custom CSS file

//import your components here:
import Homepage from './Homepage.js';
import Aboutus from './Aboutus.js';
import ContributorDetail from './ContributorDetail.js';
import ContributorList from './ContributorList.js';
import Feed from './Feed.js';
import UserProfile from './UserProfile.js';
import { Form } from './Form.js';
import { Navbar } from './Navbar.js';
import { Footer } from './Footer.js';

import INFO_ABOUT_US from '../data/infoAboutus.json';

export default function App(props) {
  //props for data that will be used in Feed
  const data = props.data;
  //props for data that will be used in AboutUs
  const infoAboutUs = INFO_ABOUT_US;

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
        <Route path='/feed' element={<Feed data={data} />} />
        <Route path='/profile' element={<UserProfile />} />
        <Route path="*" element={<Navigate to='/aboutUs' />} />
      </Routes>

      <Footer />
      </>


    //   {/* //these are the 4 main pages that will be shown to the users:
    // // PAGE #1:
    // // <Homepage />

    // // PAGE #2:
    // // <Aboutus />

    // // PAGE #3:
    // // <Feed data={data} />

    // //PAGE #4:
    // // <UserProfile data={data} />
    // // the form is our interactive part. in the final, we will use the router to call 
    // // this component in the UserProfile, but for now, we put it here for interactivity
    // //  <Form /> */}
  );
}
