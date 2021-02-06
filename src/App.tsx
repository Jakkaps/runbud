import React from "react";
import "./App.css";

import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

import { useAuthState } from "react-firebase-hooks/auth";
import LoginPage from "./Login/LoginPage";
import { firebaseConfig } from "./FirebaseConfig";

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app();
}

function App() {
  const [user] = useAuthState(firebase.auth());

  return !user ? <div className={"App"}>Hei</div> : <LoginPage />;
}

export default App;
