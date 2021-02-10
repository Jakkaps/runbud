import React, {
  FunctionComponent,
  ReactElement,
  useContext,
  useEffect,
  useState,
} from "react";
import { Run } from "../Shared/Run";
import { BsMap, BsFillPersonFill, BsAlarm } from "react-icons/bs";
import { ListGroup, Button } from "react-bootstrap";
import "./RunsListItem.css";
import { formatDate } from "../Shared/DateHelper";
import { toText } from "../Shared/PaceHelper";
import { calculateDistance } from "../Shared/DistanceHelper";
import { UserPositionContext } from "../App";

interface RunsListItemProps {
  run: Run;
  participationButtonStyle: string;
  participationButtonText: string;
  participationButtonClicked: (runId: string) => void;
}

const RunsListItem: FunctionComponent<RunsListItemProps> = ({
  run,
  participationButtonClicked,
  participationButtonStyle,
  participationButtonText,
}): ReactElement => {
  const [distanceText, setDistanceText] = useState("No distance to show");
  const userPosition = useContext(UserPositionContext);

  const distanceCallback = (
    response: google.maps.DirectionsResult,
    status: google.maps.DirectionsStatus
  ) => {
    if (status == "OK") {
      setDistanceText(response.routes[0].legs[0].distance.text + " away");
    }
  };

  useEffect(() => {
    if (userPosition.lat !== 0) {
      calculateDistance(userPosition, run.startingPoint, distanceCallback);
    }
  }, [userPosition, run]);

  const openRunInMaps = () => {
    window.open(
      `https://maps.google.com/?q=${run.startingPoint.lat},${run.startingPoint.lng}`
    );
  };

  return (
    <ListGroup.Item id={"runs-list-container"}>
      <h5>{formatDate(run.time)}</h5>
      <p className={"SubInfo"}>
        {toText(run.pace.min) + "-" + toText(run.pace.max) + " m/km"}
      </p>
      <p className={"SubInfo"}>
        {run.length.min + "-" + run.length.max + " km"}
      </p>
      <p className={"SubInfo"}>{distanceText}</p>
      <p id={"people"}>
        {run.people.length} <BsFillPersonFill id={"people-icon"} />
      </p>
      <div id={"buttons-container"}>
        <Button
          id={"participation-button"}
          variant={participationButtonStyle}
          onClick={() => {
            participationButtonClicked(run.id);
          }}
        >
          {participationButtonText}
        </Button>
        <Button id={"map-button"} onClick={openRunInMaps}>
          <BsMap size={20} id={"map-icon"} />
          Open in map
        </Button>
      </div>
    </ListGroup.Item>
  );
};

export default RunsListItem;
