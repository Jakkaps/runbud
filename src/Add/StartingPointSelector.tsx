import React, { FunctionComponent, ReactElement, useState } from "react";
import GoogleMapReact from "google-map-react";
import "./StartingPointSelector.css";
import { GOOGLEMAPSAPIKEY } from "../Shared/APIKeys";
import { BsGeo } from "react-icons/bs";
import { Position } from "../Shared/Run";

interface StartingPointSelectorProps {
  startingPoint: { lat: number; lng: number };
  handlePointSelected: (newPosition: Position) => void;
}

const StartingPointSelector: FunctionComponent<StartingPointSelectorProps> = ({
  startingPoint,
  handlePointSelected,
}): ReactElement => {
  const [pos, setPos] = useState(startingPoint);

  return (
    <div id={"map-container"}>
      <GoogleMapReact
        bootstrapURLKeys={{
          key: GOOGLEMAPSAPIKEY,
        }}
        defaultZoom={14}
        defaultCenter={startingPoint}
        onClick={(e) => {
          const position = { lat: e.lat, lng: e.lng };
          setPos(position);
          handlePointSelected(position);
        }}
      >
        <Marker lat={pos.lat} lng={pos.lng} />
      </GoogleMapReact>
    </div>
  );
};

interface MarkerProps {
  lat: number;
  lng: number;
}
const Marker: FunctionComponent<MarkerProps> = (): ReactElement => {
  return <BsGeo size={40} />;
};

export default StartingPointSelector;
