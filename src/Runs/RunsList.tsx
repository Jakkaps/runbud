import React, { FunctionComponent, ReactElement } from "react";
import "firebase/database";
import RunsListItem from "./RunsListItem";
import { Run } from "../Shared/Run";
import "./RunsList.css";
import { ListGroup } from "react-bootstrap";

interface RunsListProps {
  runs: Run[];
  goAlongClicked: (runId: string) => void;
}

const RunsList: FunctionComponent<RunsListProps> = ({
  runs,
  goAlongClicked,
}): ReactElement => {
  const runsListItems: ReactElement[] = runs.map((run) => {
    return <RunsListItem run={run} goAlongClicked={goAlongClicked} />;
  });

  return <ListGroup id={"list-container"}>{runsListItems}</ListGroup>;
};

export default RunsList;
