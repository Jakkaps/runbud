import React, { FunctionComponent, ReactElement } from "react";

import { StyledFirebaseAuth } from "react-firebaseui";
import firebase from "firebase";

import "./LoginPage.css";

const uiConfig = {
  signInFlow: "popup",
  signInSuccessUrl: "/runs",
  signInOptions: [
    firebase.auth.EmailAuthProvider.PROVIDER_ID,
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    firebase.auth.FacebookAuthProvider.PROVIDER_ID,
  ],
};

const LoginPage: FunctionComponent = ({}): ReactElement => {
  return (
    <div className="LoginPage">
      <h1 id={"tagline"}>Share the Joy of Running</h1>
      <StyledFirebaseAuth
        uiConfig={uiConfig}
        firebaseAuth={firebase.auth()}
        className={"FirebaseUI"}
      />
    </div>
  );
};

export default LoginPage;
