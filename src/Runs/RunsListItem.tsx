import React, { FunctionComponent, ReactElement } from "react";
import { Run } from "../Shared/Run";
import { BsFillPersonFill } from "react-icons/bs";
import { ListGroup, Button } from "react-bootstrap";
import "./RunsListItem.css";
import { formatDate } from "../Shared/DateHelper";
import { toText } from "../Shared/PaceHelper";

interface RunsListItemProps {
  run: Run;
  goAlongClicked: (runId: string) => void;
}

const RunsListItem: FunctionComponent<RunsListItemProps> = ({
  run,
  goAlongClicked,
}): ReactElement => {
  return (
    <ListGroup.Item id={"runs-list-container"}>
      <h5>{formatDate(run.time)}</h5>
      <p className={"SubInfo"}>
        {toText(run.pace.min) + "-" + toText(run.pace.max) + " m/km"}
      </p>
      <p className={"SubInfo"}>
        {run.length.min + "-" + run.length.max + " km"}
      </p>
      <p id={"people"}>
        {run.people} <BsFillPersonFill id={"people-icon"} />
      </p>
      <Button
        id={"go-along"}
        variant={"primary"}
        onClick={() => {
          goAlongClicked(run.id);
        }}
      >
        Go along
      </Button>
    </ListGroup.Item>
  );
};

export default RunsListItem;
