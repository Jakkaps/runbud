import React, { FunctionComponent, ReactElement } from "react";
import { Run } from "./Run";
import { BsFillPersonFill } from "react-icons/bs";
import { ListGroup, Button } from "react-bootstrap";
import "./RunsListItem.css";
import { formatDate } from "../Shared/DateHelper";

interface RunsListItemProps {
  run: Run;
}

const RunsListItem: FunctionComponent<RunsListItemProps> = ({
  run,
}): ReactElement => {
  return (
    <ListGroup.Item id={"runs-list-container"}>
      <h5>{formatDate(run.time)}</h5>
      <p className={"SubInfo"}>
        {run.pace.min + "-" + run.pace.max + " min/km"}
      </p>
      <p className={"SubInfo"}>
        {run.length.min + "-" + run.length.max + " km"}
      </p>
      <p id={"people"}>
        {run.people} <BsFillPersonFill id={"people-icon"} />
      </p>
      <Button id={"go-along"} variant={"primary"}>
        Go along
      </Button>
    </ListGroup.Item>
  );
};

export default RunsListItem;
