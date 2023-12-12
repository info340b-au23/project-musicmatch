import React from 'react';
import { getAuth, EmailAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import { StyledFirebaseAuth } from 'react-firebaseui'; 

import DEFAULT_USERS from '../data/users.json';

const firebaseConfig = {
    // Your Firebase project configuration goes here
    apiKey: 'AIzaSyDLMUske3Ucs05Wm_x2NJ-gAfXu47y8788',
    authDomain: 'YOUR_AUTH_DOMAIN',
    projectId: 'info-340-final-8c670',
    storageBucket: 'YOUR_STORAGE_BUCKET',
    messagingSenderId: 'YOUR_MESSAGING_SENDER_ID',
    appId: 'YOUR_APP_ID',
};

export default function SignIn(props) {
    const currentUser = props.currentUser;
    const loginFunction = props.loginCallback;

    const auth = getAuth();

    const configObj = {
        signInOptions: [
            {
                provider: EmailAuthProvider.PROVIDER_ID,
                requireDisplayName: true,
            },
            {
                provider: GoogleAuthProvider.PROVIDER_ID,
            }
        ],
        signInFlow: 'popup',
        callbacks: {
            signInSuccessWithAuthResult: () => false
        },
        credentialHelper: 'none'
    }

    // const handleClick = (event) => {
    //     const whichUser = event.currentTarget.className
    //     console.log(whichUser);
    //     const selectedUserObj = DEFAULT_USERS.filter((userObj) => userObj.userId === whichUser)[0] || DEFAULT_USERS[0]
        
    //     loginFunction(selectedUserObj)
    // }

    return (
        <div className="card bg-dark">
            <div className="container card-body">
                <StyledFirebaseAuth firebaseAuth={auth} uiConfig={configObj} />
            </div>
        </div>
    )
}