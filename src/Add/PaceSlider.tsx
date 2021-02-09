import React, { FunctionComponent, ReactElement, useState } from "react";
import { Slider } from "@material-ui/core";
import "./FormItem.css";
import { toText } from "../Shared/PaceHelper";

interface PaceSliderProps {
  onChange: (min: number, max: number) => void;
}

const PaceSlider: FunctionComponent<PaceSliderProps> = ({
  onChange,
}): ReactElement => {
  const [pace, setPace] = useState([5.5, 6]);

  const handleChange = (event: any, newValue: any) => {
    setPace(newValue);
    onChange(newValue[0], newValue[1]);
  };

  return (
    <Slider
      id={"slider"}
      value={pace}
      step={1 / 6}
      min={2}
      max={10}
      onChange={handleChange}
      valueLabelDisplay="on"
      valueLabelFormat={toText}
    />
  );
};

export default PaceSlider;
