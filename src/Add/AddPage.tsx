import React, { FunctionComponent, ReactElement, useState } from "react";
import FormItem from "./FormItem";
import "./AddPage.css";
import { Button } from "react-bootstrap";
import { BsPlus } from "react-icons/bs";
import PaceSlider from "./PaceSlider";

const AddPage: FunctionComponent = (): ReactElement => {
  const [pace, setPace] = useState({ min: "5:00", max: "6:00" });
  const handlePaceSliderChange = (min: string, max: string) => {
    setPace({ min, max });
    console.log(pace.max);
  };

  return (
    <div id={"add-container"}>
      <FormItem title={"Time"}>16:30</FormItem>
      <FormItem title={"Pace (m/km)"}>
        <PaceSlider onChange={handlePaceSliderChange} />
      </FormItem>
      <FormItem title={"Length"}>8-10km</FormItem>
      <Button variant={"success"} size={"lg"} id={"add-run-button"}>
        <BsPlus size={"30"} />
        Add Run
      </Button>
    </div>
  );
};

export default AddPage;
