import React from 'react';
import { getAuth, EmailAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';

import DEFAULT_USERS from '../data/users.json';

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