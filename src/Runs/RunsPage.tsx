import React, { FunctionComponent, ReactElement, useContext } from "react";
import { AuthContext } from "../App";
import { useHistory } from "react-router-dom";
import "./RunsPage.css";
import RunsList from "./RunsList";
import { Button, Navbar, Form } from "react-bootstrap";
import { BsPlus } from "react-icons/bs";

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
      <Navbar
        className="bg-primary justify-content-between"
        variant={"dark"}
        id={"navbar"}
      >
        <Form inline>
          <Button
            size={"lg"}
            id={"nav-button"}
            onClick={(): void => history.push("/add")}
          >
            <BsPlus size={30} /> Add Run
          </Button>
          <Button size={"lg"} onClick={handleLogout} id={"nav-button"}>
            Log out
          </Button>
        </Form>
      </Navbar>
      <RunsList />
    </div>
  );
};

export default RunsPage;
