import React, { FunctionComponent } from "react";
import GoogleMapReact from "google-map-react";
import "./StartingPointSelector.css";
import { GOOGLEMAPSAPIKEY } from "../Shared/APIKeys";

interface StartingPointSelectorProps {
  handlePointSelected: (lat: number, long: number) => void;
}

const StartingPointSelector: FunctionComponent<StartingPointSelectorProps> = ({
  handlePointSelected,
}) => {
  return (
    <div id={"map-container"}>
      <GoogleMapReact
        bootstrapURLKeys={{
          key: GOOGLEMAPSAPIKEY,
        }}
        defaultZoom={11}
        defaultCenter={{
          lat: 59.95,
          lng: 30.33,
        }}
      />
    </div>
  );
};

export default StartingPointSelector;
