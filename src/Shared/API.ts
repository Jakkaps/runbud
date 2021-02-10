import { Run } from "./Run";
import firebase from "firebase/app";
import "firebase/database";

// TODO: Add error handling
export function addRun(run: Run, userId: string): void {
  const pushedRun = firebase
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
      time: run.time.toISOString(),
      startingPoint: {
        lat: run.startingPoint.lat,
        lng: run.startingPoint.lng,
      },
    });

  if (typeof pushedRun.key === "string") {
    addUserToRun(userId, pushedRun.key);
  }
}

export function addUserToRun(userId: string, runId: string) {
  const ref = firebase.database().ref("/runs/" + runId + "/users/" + userId);
  let newUser = false;
  ref
    .once("value", (snapshot) => {
      newUser = !snapshot.exists();
    })
    .then(() => {
      if (newUser) {
        ref.set({ dateJoined: new Date().toISOString() }).then(() => {});
      }
    });
}

export function removeUserFromRun(userId: string, runId: string) {
  firebase
    .database()
    .ref("/runs/" + runId + "/users/" + userId)
    .remove((e) => {
      console.log(e);
    })
    .then((r) => {});
}

export function subscribeToRuns(
  exploreRunsCallback: (runs: Run[]) => void,
  myRunsCallback: (runs: Run[]) => void,
  userId: string
) {
  let runsRef = firebase.database().ref("runs/");
  runsRef.on(
    "value",
    (snapshot) => {
      let exploreRuns: Run[] = [];
      let myRuns: Run[] = [];
      snapshot.forEach((runSnapshot) => {
        const key = runSnapshot.key;
        if (typeof key === "string") {
          let people: string[] = [];
          runSnapshot.child("users").forEach((userSnapshot) => {
            console.log("Yes 1 use");
            const userId = userSnapshot.key;
            if (typeof userId === "string") {
              people.push(userId);
            }
          });

          const r = runSnapshot.val();
          if (people.includes(userId)) {
            myRuns.push({
              time: new Date(r.time),
              pace: r.pace,
              people: people,
              length: r.length,
              id: key,
              startingPoint: {
                lat: r.startingPoint.lat,
                lng: r.startingPoint.lng,
              },
            });
          } else {
            exploreRuns.push({
              time: new Date(r.time),
              pace: r.pace,
              people: people,
              length: r.length,
              id: key,
              startingPoint: {
                lat: r.startingPoint.lat,
                lng: r.startingPoint.lng,
              },
            });
          }
        }
      });
      exploreRunsCallback(exploreRuns);
      myRunsCallback(myRuns);
    },
    (e) => {
      console.error(e);
    }
  );
}
