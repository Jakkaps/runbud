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
            <BsPlus size={30} />
          </Button>
          <Button size={"lg"} onClick={handleLogout} id={"nav-button"}>
            <BsBoxArrowRight size={"30"} />
          </Button>
        </Form>
      </Navbar>
      <RunsList
        title={"Explore"}
        runs={runs}
        participationButtonClicked={handleGoAlongClicked}
      />
    </div>
  );
};

export default RunsPage;
