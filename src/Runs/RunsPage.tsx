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
import { addUserToRun, subscribeToRuns } from "../Shared/API";

const RunsPage: FunctionComponent = (): ReactElement => {
  const auth = useContext(AuthContext);
  const history = useHistory();
  const [runs, setRuns] = useState(new Array<Run>());
  const userId = useContext(AuthContext).currentUser?.uid;

  const handleRunsChanged = (newRuns: Run[]): void => {
    setRuns(newRuns);
  };

  useEffect(() => {
    subscribeToRuns(handleRunsChanged);
  }, []);

  const handleLogout = function (): void {
    auth.signOut().then(() => {
      history.push("/");
    });
  };

  const handleGoAlongClicked = (runId: string): void => {
    if (typeof userId === "string") {
      addUserToRun(userId, runId);
    }
  };

  return (
    <div id={"container"}>
      <Navbar className="bg-light justify-content-between" id={"navbar"}>
        <Form inline>
          <Button
            size={"lg"}
            id={"nav-button"}
            variant={"light"}
            onClick={(): void => history.push("/add")}
          >
            <BsPlus size={30} />
          </Button>
          <Button
            size={"lg"}
            variant={"light"}
            onClick={handleLogout}
            id={"nav-button"}
          >
            <BsBoxArrowRight size={"30"} />
          </Button>
        </Form>
        <Navbar.Brand>RunBud</Navbar.Brand>
      </Navbar>
      <RunsList
        title={"Your runs"}
        participationButtonText={"Leave"}
        participationButtonStyle={"danger"}
        runs={runs}
        participationButtonClicked={(id) => {}}
      />
      <RunsList
        title={"Explore"}
        participationButtonText={"Go along"}
        participationButtonStyle={"primary"}
        runs={runs}
        participationButtonClicked={handleGoAlongClicked}
      />
    </div>
  );
};

export default RunsPage;
