import React, { FunctionComponent, ReactElement } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import firebase from "firebase/app";
import "firebase/auth";

import LoginPage from "./Login/LoginPage";
import { firebaseConfig } from "./FirebaseConfig";
import RunsPage from "./Runs/RunsPage";
import AddPage from "./Add/AddPage";

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app();
}

const auth = firebase.auth();
export const AuthContext = React.createContext(auth);

const App: FunctionComponent = (): ReactElement => {
  return (
    <AuthContext.Provider value={auth}>
      <Router>
        <Switch>
          <Route path={"/runs"}>
            <RunsPage />
          </Route>
          <Route path={"/add"}>
            <AddPage />
          </Route>
          <Route path={""}>
            <LoginPage />
          </Route>
        </Switch>
      </Router>
    </AuthContext.Provider>
  );
};

export default App;
