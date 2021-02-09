import { Run } from "./Run";
import firebase from "firebase/app";
import "firebase/database";

// TODO: Add error handling
export function addRun(run: Run): void {
  firebase
    .database()
    .ref("/runs")
    .push({
      pace: {
        min: run.pace.min,
        max: run.pace.max,
      },
      length: {
        min: run.length.min,
        max: run.length.max,
      },
      people: run.people,
      time: run.time.toISOString(),
    });
}
