import React, {FunctionComponent, ReactElement} from "react";

import {FirebaseAuth} from "react-firebaseui";
import firebase from "firebase";
import {firebaseConfig} from "./FirebaseConfig";

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
} else {
    firebase.app()
}

const uiConfig = {
    signInFlow: 'popup',
    signInSuccessUrl: '/runs',
    signInOptions: [
        firebase.auth.EmailAuthProvider.PROVIDER_ID,
        firebase.auth.GoogleAuthProvider.PROVIDER_ID,
        firebase.auth.FacebookAuthProvider.PROVIDER_ID,
    ],
};

const LoginPage: FunctionComponent = ({}): ReactElement => {
    return (
        <div className="App">
            <FirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()}/>
        </div>
    )
}

export default LoginPage;
