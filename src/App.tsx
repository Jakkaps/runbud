import React from "react";
import "./App.css";

import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

import {useAuthState} from 'react-firebase-hooks/auth';
import LoginPage from "./LoginPage";

function App(){
    const [user] = useAuthState(firebase.auth())

    return user ? <div>Hei</div> : <LoginPage/>
}

export default App;
