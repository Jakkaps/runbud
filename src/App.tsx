import React, {
  createContext,
  FunctionComponent,
  ReactElement,
  useState,
} from "react";
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
export const AuthContext = createContext(auth);
export const UserPositionContext = createContext({ lat: 0, lng: 0 });

const App: FunctionComponent = (): ReactElement => {
  const [userPosition, setUserPosition] = useState({ lat: 0, lng: 0 });
  navigator.geolocation.getCurrentPosition((location) => {
    setUserPosition({
      lat: location.coords.latitude,
      lng: location.coords.longitude,
    });
  });
  return (
    <AuthContext.Provider value={auth}>
      <UserPositionContext.Provider value={userPosition}>
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
      </UserPositionContext.Provider>
    </AuthContext.Provider>
  );
};

export default App;
