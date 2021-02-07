import React, { FunctionComponent, ReactElement } from "react";
import FormItem from "./FormItem";
import "./AddPage.css";
import { Button } from "react-bootstrap";
import { BsPlus } from "react-icons/bs";

const AddPage: FunctionComponent = (): ReactElement => {
  return (
    <div id={"add-container"}>
      <FormItem title={"Time"}>16:30</FormItem>
      <FormItem title={"Pace"}>5:00-4:30</FormItem>
      <FormItem title={"Length"}>8-10km</FormItem>
      <Button variant={"success"} size={"lg"} id={"add-run-button"}>
        <BsPlus size={"30"} />
        Add Run
      </Button>
    </div>
  );
};

export default AddPage;
