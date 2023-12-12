import React, { useEffect, useState } from 'react';
import { Routes, Route, Navigate, Outlet } from 'react-router-dom';
import { getDatabase, ref, get } from 'firebase/database';
import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth';

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
import USERS from '../data/users.json';

export default function App(props) {
  
  //data that will be used in AboutUs
  const infoAboutUs = INFO_ABOUT_US;
  //we import the realtime data in index.js
  const users = USERS;

  const [currentUser, setCurrentUser] = useState(users[0]);

	// const navigateTo = useNavigate();
		
	useEffect(() => {
		const auth = getAuth();
		onAuthStateChanged(auth, (firebaseUser) => {
			if (firebaseUser) {
				console.log('signing in as', firebaseUser.userName)
				console.log(firebaseUser);
				firebaseUser.userId = firebaseUser.uid;
				firebaseUser.userName = firebaseUser.displayName;
				firebaseUser.userImg = firebaseUser.photoURL || 'img/null.jpg';
				setCurrentUser(firebaseUser);
			} else {
				console.log('signed out');
				setCurrentUser(users[0]);
			}
		})
	}, [])

  const [postData, setPostData] = useState([]);
  useEffect(() => {
    const db = getDatabase()
    const postsRef = ref(db, "posts");

    get(postsRef)
      .then((snapshot) => {
        if (snapshot.exists()) {
          setPostData(snapshot);
        } else {
          console.log('No data');
        }
      })
      .catch((error) => {
        console.log('Error:', error);
      });
  }, []);

  const [savedPosts, setSavedPosts] = useState(new Set());

  const handleSaveClick = (post) => {
    setSavedPosts((prevSavedPosts) => new Set([...prevSavedPosts, post]));
  };

  // set state for formData
  const [formData, setFormData] = useState({
    songName: "",
    artistName: "",
    genres: [],
    location: [],
    activity: [],
    image: null
  });

  //call components here:
  return (
    <>
      <Navbar  currentUser={currentUser} />
 
      <Routes>
        <Route path='/aboutUs' element={<Aboutus infoAboutUs={infoAboutUs} />}>
          {/*route for information a specific person out of the 4 contributors*/}
          <Route path=":contributorName" element={<ContributorDetail />} />
          {/*child route*/}
          <Route index element={<ContributorList infoAboutUs={infoAboutUs} />} />
        </Route>
 
        <Route path='/home' element={<Homepage />} />
        <Route path='/feed' element={<Feed data={postData} handleSaveClick={handleSaveClick} savedPosts={savedPosts} setSavedPosts={setSavedPosts} />} />
        <Route path='/profile' element={<UserProfile formData={formData} />} />
        <Route path='/profile/form' element={<Form setFormData={setFormData} />} />
        <Route path="/savedMusic" element={<SavedMusic data={savedPosts} />} />
        {/*change route to home!*/}
        <Route element={<ProtectedPage currentUser={currentUser} />}>
          <Route path="signin" element={<Navigate to="/signin" />} />
        </Route>
 
        <Route path="*" element={<Navigate to='/home' />} />
      </Routes>
 
      <Footer />
    </>
 
  );
}

function ProtectedPage(props) {
  if(props.currentUser.userId === null) {
    return <Navigate to="/signin" />
  }
  else { 
    return <Outlet />
  }
}