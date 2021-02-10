import React, { FunctionComponent, ReactElement } from "react";
import "firebase/database";
import RunsListItem from "./RunsListItem";
import { Run } from "../Shared/Run";
import "./RunsList.css";
import { ListGroup } from "react-bootstrap";

interface RunsListProps {
  title: string;
  runs: Run[];
  participationButtonClicked: (runId: string) => void;
}

const RunsList: FunctionComponent<RunsListProps> = ({
  title,
  runs,
  participationButtonClicked,
}): ReactElement => {
  const runsListItems: ReactElement[] = runs.map((run) => {
    return (
      <RunsListItem
        run={run}
        participationButtonClicked={participationButtonClicked}
      />
    );
  });

  return (
    <div id={"list-container"}>
      <h6 id={"list-group-title"}>{title}</h6>
      <ListGroup id={"list-group"}>{runsListItems}</ListGroup>
    </div>
  );
};

export default RunsList;
