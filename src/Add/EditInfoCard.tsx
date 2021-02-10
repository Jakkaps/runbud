import { Range } from "../Shared/Run";
import { MaterialUiPickersDate } from "@material-ui/pickers/typings/date";
import React, { FunctionComponent, ReactElement } from "react";
import FormItem from "./FormItem";
import { DateTimePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import PaceSlider from "./PaceSlider";
import LengthSlider from "./LengthSlider";
import { Button } from "react-bootstrap";
import { BsPlus } from "react-icons/bs";
import "./EditInfoCard.css";

interface EditInfoProps {
  defaultLength: Range<number>;
  handlePaceSliderChange: (min: number, max: number) => void;
  handleLengthSliderChange: (min: number, max: number) => void;
  handleDateChanged: (value: MaterialUiPickersDate) => void;
  handleAddRunClicked: () => void;
}

const EditInfoCard: FunctionComponent<EditInfoProps> = ({
  handleAddRunClicked,
  handlePaceSliderChange,
  handleDateChanged,
  handleLengthSliderChange,
  defaultLength,
}): ReactElement => {
  return (
    <div id={"add-info-card-container"}>
      <FormItem title={"Time"}>
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <DateTimePicker
            fullWidth
            value={new Date()}
            disablePast
            onChange={handleDateChanged}
          />
        </MuiPickersUtilsProvider>
      </FormItem>
      <FormItem title={"Pace (m/km)"}>
        <PaceSlider onChange={handlePaceSliderChange} />
      </FormItem>
      <FormItem title={"Length (km)"}>
        <LengthSlider
          length={defaultLength}
          onChange={handleLengthSliderChange}
        />
      </FormItem>
      <Button
        variant={"success"}
        size={"lg"}
        id={"add-run-button"}
        onClick={handleAddRunClicked}
      >
        <BsPlus size={"30"} />
        Add Run
      </Button>
    </div>
  );
};

export default EditInfoCard;
