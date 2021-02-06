import React, { FunctionComponent, ReactElement, useContext } from "react";
import Button from "react-bootstrap/Button";
import { AuthContext } from "../App";
import { useHistory } from "react-router-dom";
import "./RunsPage.css";
import RunsList from "./RunsList";

const RunsPage: FunctionComponent = (): ReactElement => {
  const auth = useContext(AuthContext);
  const history = useHistory();

  const handleLogout = function (): void {
    auth.signOut().then(() => {
      history.push("/");
    });
  };

  return (
    <div id={"container"}>
      <RunsList />
      <Button id="log-out-button" onClick={handleLogout} variant={"danger"}>
        Log out
      </Button>
    </div>
  );
};

export default RunsPage;
