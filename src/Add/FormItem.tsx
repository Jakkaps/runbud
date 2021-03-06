import React, { FunctionComponent, ReactElement } from "react";
import "./FormItem.css";

type FormItemProps = {
  title: string;
};

const FormItem: FunctionComponent<FormItemProps> = ({
  title,
  children,
}): ReactElement => {
  return (
    <div id={"form-item-container"}>
      <h4 id={"form-item-title"}>{title}</h4>
      {children}
    </div>
  );
};

export default FormItem;
