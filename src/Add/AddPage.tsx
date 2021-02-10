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
import { Position } from "../Shared/Run";
import { Spinner } from "react-bootstrap";

const AddPage: FunctionComponent = (): ReactElement => {
  const history = useHistory();
  const [pace, setPace] = useState({ min: 5.5, max: 6 });
  const [date, setDate] = useState(new Date());
  const [length, setLength] = useState({ min: 5, max: 10 });
  const [userPos, setUserPos] = useState({
    lat: 0,
    lng: 0,
  });

  const userId = useContext(AuthContext).currentUser?.uid;

  navigator.geolocation.getCurrentPosition((location) => {
    setUserPos({
      lat: location.coords.latitude,
      lng: location.coords.longitude,
    });
  });

  const [startingPoint, setStartingPoint] = useState(userPos);

  const handlePaceSliderChange = (min: number, max: number): void => {
    setPace({ min, max });
  };

  const handleDateChanged = (value: MaterialUiPickersDate): void => {
    if (value !== null) {
      setDate(new Date(value.toISOString()));
    }
  };

  const handleLengthSliderChange = (min: number, max: number): void => {
    setLength({ min, max });
  };

  const handleAddRunClicked = (): void => {
    if (typeof userId === "string") {
      addRun(
        {
          length: length,
          pace: pace,
          time: date,
          people: [],
          id: "",
          startingPoint,
        },
        userId
      );
      history.push("/runs");
    }
  };

  const handleStartingPointSelected = (newPosition: Position): void => {
    setStartingPoint(newPosition);
  };

  const map =
    userPos.lat !== 0 ? (
      <StartingPointSelector
        startingPoint={userPos}
        handlePointSelected={handleStartingPointSelected}
      />
    ) : (
      <div id={"map-spinner-container"}>
        <Spinner id={"map-spinner"} animation="grow" variant="primary" />
      </div>
    );
  return (
    <div id={"add-container"}>
      <EditInfoCard
        length={length}
        date={date}
        handlePaceSliderChange={handlePaceSliderChange}
        handleLengthSliderChange={handleLengthSliderChange}
        handleDateChanged={handleDateChanged}
        handleAddRunClicked={handleAddRunClicked}
      />
      {map}
    </div>
  );
};

export default AddPage;
