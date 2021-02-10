import React, {
  FunctionComponent,
  ReactElement,
  useContext,
  useState,
} from "react";

import { MaterialUiPickersDate } from "@material-ui/pickers/typings/date";
import { addRun } from "../Shared/API";
import { useHistory } from "react-router-dom";
import { AuthContext } from "../App";
import EditInfoCard from "./EditInfoCard";
import "./AddPage.css";
import StartingPointSelector from "./StartingPointSelector";

const AddPage: FunctionComponent = (): ReactElement => {
  const history = useHistory();
  const [pace, setPace] = useState({ min: 5.5, max: 6 });
  const [date, setDate] = useState(new Date());
  const [length, setLength] = useState({ min: 5, max: 10 });

  const userId = useContext(AuthContext).currentUser?.uid;

  const handlePaceSliderChange = (min: number, max: number): void => {
    setPace({ min, max });
  };

  const handleDateChanged = (value: MaterialUiPickersDate): void => {
    if (value !== null) {
      setDate(new Date(value.getDate()));
    }
  };

  const handleLengthSliderChange = (min: number, max: number): void => {
    setLength({ min, max });
  };

  const handleAddRunClicked = (): void => {
    if (typeof userId === "string") {
      addRun(
        { length: length, pace: pace, time: date, people: [], id: "" },
        userId
      );
      history.push("/runs");
    }
  };

  const handleStartingPointSelected = (lat: number, long: number): void => {
    console.log(`lag: ${lat}, long: ${long}`);
  };

  return (
    <div id={"add-container"}>
      <EditInfoCard
        defaultLength={length}
        handlePaceSliderChange={handlePaceSliderChange}
        handleLengthSliderChange={handleLengthSliderChange}
        handleDateChanged={handleDateChanged}
        handleAddRunClicked={handleAddRunClicked}
      />
      <StartingPointSelector
        handlePointSelected={handleStartingPointSelected}
      />
    </div>
  );
};

export default AddPage;
