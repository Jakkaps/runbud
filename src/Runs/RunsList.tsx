import React, {
  FunctionComponent,
  ReactElement,
  useEffect,
  useState,
} from "react";
import firebase from "firebase/app";
import "firebase/database";
import RunsListItem from "./RunsListItem";
import { Range, Run } from "./Run";

const RunsList: FunctionComponent = (): ReactElement => {
  const range: Range = { min: 2, max: 3 };
  const [runs, setRuns] = useState(new Array<Run>());

  useEffect(() => {
    let runsRef = firebase.database().ref("runs/");
    runsRef.on(
      "value",
      (snapshot) => {
        let newRuns: Run[] = [];
        snapshot.forEach((run) => {
          const r = run.val();
          newRuns.push({
            time: new Date(),
            pace: r.pace,
            people: range,
            length: range,
          });
        });
        setRuns(newRuns);
      },
      (e) => {
        console.error(e);
      }
    );
  }, []);

  const runsListItems: ReactElement[] = runs.map((run) => {
    return <RunsListItem run={run} />;
  });

  return <ul>{runsListItems}</ul>;
};

export default RunsList;
