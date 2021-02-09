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

export function subscribeToRuns(callback: (runs: Run[]) => void) {
  let runsRef = firebase.database().ref("runs/");
  runsRef.on(
    "value",
    (snapshot) => {
      let newRuns: Run[] = [];
      snapshot.forEach((run) => {
        const r = run.val();
        newRuns.push({
          time: new Date(r.time),
          pace: r.pace,
          people: r.people,
          length: r.length,
        });
      });
      console.log("Got update");
      callback(newRuns);
    },
    (e) => {
      console.error(e);
    }
  );
}
