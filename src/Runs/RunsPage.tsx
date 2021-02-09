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
import { subscribeToRuns } from "../Shared/API";

const RunsPage: FunctionComponent = (): ReactElement => {
  const auth = useContext(AuthContext);
  const history = useHistory();
  const [runs, setRuns] = useState(new Array<Run>());
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
      <RunsList runs={runs} />
    </div>
  );
};

export default RunsPage;
