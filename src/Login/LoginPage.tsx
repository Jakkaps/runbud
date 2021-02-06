import React, { FunctionComponent, ReactElement, useContext } from "react";

import { StyledFirebaseAuth } from "react-firebaseui";
import firebase from "firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { useHistory } from "react-router-dom";
import { AuthContext } from "../App";

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
  const auth = useContext(AuthContext);
  const [user] = useAuthState(auth);
  const history = useHistory();

  // Already logged in, send to runs page
  if (user) {
    history.push("/runs");
  }

  return (
    <div className="LoginPage">
      <h1 id={"tagline"}>Share the Joy of Running</h1>
      <StyledFirebaseAuth
        uiConfig={uiConfig}
        firebaseAuth={auth}
        className={"FirebaseUI"}
      />
    </div>
  );
};

export default LoginPage;
