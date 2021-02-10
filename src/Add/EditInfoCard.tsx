import { Range } from "../Shared/Run";
import { MaterialUiPickersDate } from "@material-ui/pickers/typings/date";
import React, { FunctionComponent, ReactElement } from "react";
import FormItem from "./FormItem";
import { DateTimePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import PaceSlider from "./PaceSlider";
import LengthSlider from "./LengthSlider";
import { Button } from "react-bootstrap";
import "./EditInfoCard.css";

interface EditInfoProps {
  length: Range<number>;
  date: Date;
  handlePaceSliderChange: (min: number, max: number) => void;
  handleLengthSliderChange: (min: number, max: number) => void;
  handleDateChanged: (value: MaterialUiPickersDate) => void;
  handleAddRunClicked: () => void;
  handleCancelClicked: () => void;
}

const EditInfoCard: FunctionComponent<EditInfoProps> = ({
  handleAddRunClicked,
  handleCancelClicked,
  handlePaceSliderChange,
  handleDateChanged,
  handleLengthSliderChange,
  length,
  date,
}): ReactElement => {
  return (
    <div id={"add-info-card-container"}>
      <FormItem title={"Time"}>
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <DateTimePicker
            fullWidth
            value={date}
            disablePast
            onChange={handleDateChanged}
          />
        </MuiPickersUtilsProvider>
      </FormItem>
      <FormItem title={"Pace (m/km)"}>
        <PaceSlider onChange={handlePaceSliderChange} />
      </FormItem>
      <FormItem title={"Length (km)"}>
        <LengthSlider length={length} onChange={handleLengthSliderChange} />
      </FormItem>
      <div id={"buttons-container"}>
        <Button variant={"danger"} size={"lg"} onClick={handleCancelClicked}>
          Cancel
        </Button>
        <Button
          variant={"success"}
          size={"lg"}
          id={"action-button"}
          onClick={handleAddRunClicked}
        >
          Add Run
        </Button>
      </div>
    </div>
  );
};

export default EditInfoCard;
