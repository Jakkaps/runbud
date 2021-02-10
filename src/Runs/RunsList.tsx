import React, { FunctionComponent, ReactElement } from "react";
import "firebase/database";
import RunsListItem from "./RunsListItem";
import { Run } from "../Shared/Run";
import "./RunsList.css";
import { ListGroup } from "react-bootstrap";

interface RunsListProps {
  title: string;
  participationButtonStyle: string;
  participationButtonText: string;
  runs: Run[];
  participationButtonClicked: (runId: string) => void;
}

const RunsList: FunctionComponent<RunsListProps> = ({
  title,
  participationButtonStyle,
  runs,
  participationButtonClicked,
  participationButtonText,
}): ReactElement => {
  const runsListItems: ReactElement[] = runs.map((run) => {
    return (
      <RunsListItem
        run={run}
        participationButtonClicked={participationButtonClicked}
        participationButtonStyle={participationButtonStyle}
        participationButtonText={participationButtonText}
      />
    );
  });

  return (
    <div id={"list-container"}>
      <p id={"list-group-title"}>{title}</p>
      <ListGroup id={"list-group"}>{runsListItems}</ListGroup>
    </div>
  );
};

export default RunsList;
