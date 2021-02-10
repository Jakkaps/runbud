import React, { FunctionComponent } from "react";
import "./StartingPointSelector.css";

interface StartingPointSelectorProps {
  handlePointSelected: (lat: number, long: number) => void;
}

const StartingPointSelector: FunctionComponent<StartingPointSelectorProps> = ({
  handlePointSelected,
}) => {
  return (
    <div id={"map-container"}>
      <h1>MAP</h1>
    </div>
  );
};

export default StartingPointSelector;
