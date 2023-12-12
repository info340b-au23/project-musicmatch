import React from 'react';
import { getAuth, EmailAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import { initializeApp } from 'firebase/app';

import DEFAULT_USERS from '../data/users.json';

const firebaseConfig = {
    apiKey: "AIzaSyDLMUske3Ucs05Wm_x2NJ-gAfXu47y8788",
    authDomain: "info-340-final-8c670.firebaseapp.com",
    databaseURL: "https://info-340-final-8c670-default-rtdb.firebaseio.com",
    projectId: "info-340-final-8c670",
    storageBucket: "info-340-final-8c670.appspot.com",
    messagingSenderId: "510854116733",
    appId: "1:510854116733:web:ec89012579511b06f68814"
  };

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

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

    return (
        <div className="card bg-dark">
            <div className="container card-body">
                <StyledFirebaseAuth firebaseAuth={auth} uiConfig={configObj} />
            </div>
        </div>
    )
}


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