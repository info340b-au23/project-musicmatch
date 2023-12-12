import React, { useState } from 'react';
import { Routes, Route, Navigate, useNavigate, Outlet } from 'react-router-dom';
import firebase from 'firebase/app';
import { getDatabase, ref, onValue, set as firebaseSet } from 'firebase/database';

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
import users from '../data/data.json';


export default function App(props) {
	//props for data that will be used in Feed
	const data = props.data;
	//props for data that will be used in AboutUs
	const infoAboutUs = INFO_ABOUT_US;

	// Test for changing Anu's username in Realtime database
	const db = getDatabase();
	const anuUsernameRef = ref(db, "users/anu/username");
	const newValForAnuUsername = "anughosh";
	firebaseSet(anuUsernameRef, newValForAnuUsername);

	const [currentUser, setCurrentUser] = useState(users[0]);

	const navigateTo = useNavigate();
		
	useEffect(() => {
	}, [])

	const loginUser = (userObj) => {
		console.log('logging in as', userObj.userName);
		setCurrentUser(userObj);
		if(userObj.userId !== null) {
			navigateTo('/homepage');
		}
	}

	//call components here:
	return (
		<>
		<Navbar />

		<Routes>
			<Route index element={<Homepage />} />
			<Route path='/aboutUs' element={<Aboutus infoAboutUs={infoAboutUs} />}>
				{/*route for information a specific person out of the 4 contributors*/}
				<Route path=":contributorName" element={<ContributorDetail />} />
				{/*child route*/}
				<Route index element={<ContributorList infoAboutUs={infoAboutUs} />} />
			</Route>
			<Route path="*" element={<Navigate to='/aboutUs' />} /> 

			<Route path='/feed' element={<Feed data={data} />} />
			{/* <Route path='/profile' element={<UserProfile />} /> */}
			<ROute path='/signin' element={<SignIn currentUser={currentUser} loginCallback={login} />}

			{/* protected routes */}
			<Route element={<ProtectedPage currentUser={currentUser} />}>
				<Route path='/profile/form' element={<Form />} />
			</Route>
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

function ProtectedPage(props) {
	if (props.currentUser.userId === null) {
		return <Navigate to='/signin' />
	} else {
		return <Outlet />
	}
}
