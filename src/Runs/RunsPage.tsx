import React, { FunctionComponent, ReactElement, useContext } from "react";
import Button from "react-bootstrap/Button";
import { AuthContext } from "../App";
import { useHistory } from "react-router-dom";
import "./RunsPage.css";

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
      <p>Runs page</p>
      <Button onClick={handleLogout} variant={"danger"}>
        Log out
      </Button>
    </div>
  );
};

export default RunsPage;
