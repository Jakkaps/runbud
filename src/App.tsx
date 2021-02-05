import React from "react";
import "./App.css";

import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import {FirebaseAuth} from 'react-firebaseui';

import {useAuthState} from 'react-firebase-hooks/auth';
import {firebaseConfig} from './FirebaseConfig';

if (!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
}else {
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

function App() {
    const [user, loading, error] = useAuthState(firebase.auth())

    return (
        <div className="App">
            <FirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()}></FirebaseAuth>
        </div>
    );
}

export default App;
