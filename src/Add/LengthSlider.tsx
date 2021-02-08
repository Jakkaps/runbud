import React, { FunctionComponent, ReactElement } from "react";
import { Slider } from "@material-ui/core";
import { Range } from "../Runs/Run";

interface LengthSliderProps {
  onChange: (min: number, max: number) => void;
  length: Range;
}

const LengthSlider: FunctionComponent<LengthSliderProps> = ({
  onChange,
  length,
}): ReactElement => {
  const handleChange = (event: any, value: any) => {
    onChange(value[0], value[1]);
  };
  return (
    <Slider
      id={"slider"}
      value={[length.min, length.max]}
      step={1}
      min={1}
      max={42}
      onChange={handleChange}
      valueLabelDisplay="on"
    />
  );
};

export default LengthSlider;
