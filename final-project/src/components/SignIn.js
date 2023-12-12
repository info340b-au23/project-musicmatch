import React, { useState } from 'react';
import { getAuth, EmailAuthProvider } from 'firebase/auth';
import { StyledFirebaseAuth } from 'react-firebaseui'; 

import DEFAULT_USERS from '../data/users.json';

const configObj = {
    signInOptions: [
        {
            provider: EmailAuthProvider.PROVIDER_ID,
            requireDisplayName: true,
        },
    ],
    signInFlow: 'popup',
    callbacks: {
        signInSuccessWithAuthResult: () => false
    },
    credentialHelper: 'none'
}

export default function SignIn(props) {
    const currentUser = props.currentUser;
    const loginFunction = props.loginCallback;

    const auth = getAuth();

    const handleClick = (event) => {
        const whichUser = event.currentTarget.className
        console.log(whichUser);
        const selectedUserObj = DEFAULT_USERS.filter((userObj) => userObj.userId === whichUser)[0] || DEFAULT_USERS[0]
        
        loginFunction(selectedUserObj)
    }

    return (
        <div className="card bg-dark">
            <div className="container card-body">
                <StyledFirebaseAuth firebaseAuth={auth} uiConfig={configObj} />
            </div>
        </div>
    )
}