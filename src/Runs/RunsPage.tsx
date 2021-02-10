import React, {
  FunctionComponent,
  ReactElement,
  useContext,
  useEffect,
  useState,
} from "react";
import { AuthContext } from "../App";
import { useHistory } from "react-router-dom";
import "./RunsPage.css";
import RunsList from "./RunsList";
import { Button, Navbar, Form } from "react-bootstrap";
import { BsBoxArrowRight, BsPlus } from "react-icons/bs";
import { Run } from "../Shared/Run";
import {
  addUserToRun,
  removeUserFromRun,
  subscribeToRuns,
} from "../Shared/API";

const RunsPage: FunctionComponent = (): ReactElement => {
  const auth = useContext(AuthContext);
  const history = useHistory();
  const [exploreRuns, setExploreRuns] = useState(new Array<Run>());
  const [myRuns, setMyRuns] = useState(new Array<Run>());
  const userId = useContext(AuthContext).currentUser?.uid;

  const handleExploreRunsChanged = (newRuns: Run[]): void => {
    setExploreRuns(newRuns);
  };

  const handleMyRunsChanged = (newRuns: Run[]): void => {
    setMyRuns(newRuns);
  };

  useEffect(() => {
    if (userId) {
      subscribeToRuns(handleExploreRunsChanged, handleMyRunsChanged, userId);
    }
  }, [userId]);

  const handleLogout = function (): void {
    auth.signOut().then(() => {
      history.push("/");
    });
  };

  const handleGoAlongClicked = (runId: string): void => {
    if (userId) {
      addUserToRun(userId, runId);
    }
  };

  const handleLeaveClicked = (runId: string): void => {
    if (userId) {
      removeUserFromRun(userId, runId);
    }
  };

  const myRunsList = myRuns.length ? (
    <RunsList
      title={"Your runs"}
      participationButtonText={"Leave"}
      participationButtonStyle={"danger"}
      runs={myRuns}
      participationButtonClicked={handleLeaveClicked}
    />
  ) : null;

  const navBarStyle = "";

  return (
    <div id={"container"}>
      <Navbar
        bg={navBarStyle}
        className={"justify-content-between"}
        id={"navbar"}
      >
        <Form inline>
          <Button
            size={"lg"}
            id={"nav-button"}
            variant={navBarStyle}
            onClick={(): void => history.push("/add")}
          >
            <BsPlus size={30} />
          </Button>
          <Button
            size={"lg"}
            variant={navBarStyle}
            onClick={handleLogout}
            id={"nav-button"}
          >
            <BsBoxArrowRight size={"30"} />
          </Button>
        </Form>
        <Navbar.Brand id={"navbar-brand"}>RunBud</Navbar.Brand>
      </Navbar>
      {myRunsList}
      <RunsList
        title={"Explore"}
        participationButtonText={"Go along"}
        participationButtonStyle={"primary"}
        runs={exploreRuns}
        participationButtonClicked={handleGoAlongClicked}
      />
    </div>
  );
};

export default RunsPage;
