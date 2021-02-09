import React, { FunctionComponent, ReactElement } from "react";
import "firebase/database";
import RunsListItem from "./RunsListItem";
import { Run } from "../Shared/Run";
import "./RunsList.css";
import { ListGroup } from "react-bootstrap";

interface RunsListProps {
  runs: Run[];
}

const RunsList: FunctionComponent<RunsListProps> = ({ runs }): ReactElement => {
  const runsListItems: ReactElement[] = runs.map((run) => {
    return <RunsListItem run={run} />;
  });

  return <ListGroup id={"list-container"}>{runsListItems}</ListGroup>;
};

export default RunsList;
