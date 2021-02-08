import React, { FunctionComponent, ReactElement, useState } from "react";
import FormItem from "./FormItem";
import "./AddPage.css";
import { Button } from "react-bootstrap";
import { BsPlus } from "react-icons/bs";
import PaceSlider from "./PaceSlider";
import DateFnsUtils from "@date-io/date-fns";
import { DateTimePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";
import { MaterialUiPickersDate } from "@material-ui/pickers/typings/date";

const AddPage: FunctionComponent = (): ReactElement => {
  const [pace, setPace] = useState({ min: "5:00", max: "6:00" });
  const [date, setDate] = useState(new Date());

  const handlePaceSliderChange = (min: string, max: string) => {
    setPace({ min, max });
  };

  const handleDateChanged = (value: MaterialUiPickersDate): void => {
    if (value !== null) {
      setDate(new Date(value.getDate()));
    }
  };

  return (
    <div id={"add-container"}>
      <FormItem title={"Time"}>
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <DateTimePicker
            fullWidth
            id={"date-time-picker"}
            value={new Date()}
            disablePast
            onChange={handleDateChanged}
          />
        </MuiPickersUtilsProvider>
      </FormItem>
      <FormItem title={"Pace (m/km)"}>
        <PaceSlider onChange={handlePaceSliderChange} />
      </FormItem>
      <FormItem title={"Length (km)"}>8-10km</FormItem>
      <Button variant={"success"} size={"lg"} id={"add-run-button"}>
        <BsPlus size={"30"} />
        Add Run
      </Button>
    </div>
  );
};

export default AddPage;
