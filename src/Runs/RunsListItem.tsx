import React, { FunctionComponent, ReactElement } from "react";
import { Run } from "./Run";

interface RunsListItemProps {
  run: Run;
}

const RunsListItem: FunctionComponent<RunsListItemProps> = ({
  run,
}): ReactElement => {
  return <p>{run.pace.min}</p>;
};

export default RunsListItem;
