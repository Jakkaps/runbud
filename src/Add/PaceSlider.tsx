import React, { FunctionComponent, ReactElement, useState } from "react";
import { Slider } from "@material-ui/core";
import "./FormItem.css";

interface PaceSliderProps {
  onChange: (min: string, max: string) => void;
}

const PaceSlider: FunctionComponent<PaceSliderProps> = ({
  onChange,
}): ReactElement => {
  const [pace, setPace] = useState([18, 24]);
  const handleChange = (event: any, newValue: any) => {
    setPace(newValue);
    const min = paceText(newValue[0]);
    const max = paceText(newValue[1]);
    onChange(min, max);
  };

  const paceText = function (value: number): string {
    let paceText = Math.floor(value / 6) + ":" + (value % 6) * 10;

    // 2:0 -> 2:00
    if (paceText.endsWith(":0")) {
      paceText += "0";
    }

    return paceText;
  };

  return (
    <Slider
      id={"slider"}
      value={pace}
      step={1}
      min={12}
      max={60}
      onChange={handleChange}
      valueLabelDisplay="on"
      valueLabelFormat={paceText}
    />
  );
};

export default PaceSlider;
