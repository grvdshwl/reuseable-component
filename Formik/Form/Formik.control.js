import React from "react";
import Checkbox from "./Components/Checkbox/Checkbox";
import Input from "./Components/Input/Input";
import Radio from "./Components/Radio/Radio";
import Select from "./Components/Select/Select";
import TextArea from "./Components/Text-area/TextArea";
import Date from "./Components/Date/Date";
import PhotoUploader from "./Components/PhotoUploader/PhotoUploader";
const FormikControl = (props) => {
  const { control, ...rest } = props;
  switch (control) {
    case "input":
      return <Input {...rest} />;
    case "textarea":
      return <TextArea {...rest} />;
    case "select":
      return <Select {...rest} />;
    case "radio":
      return <Radio {...rest} />;
    case "checkbox":
      return <Checkbox {...rest} />;
    case "date":
      return <Date {...rest} />;
    case "photo":
      return <PhotoUploader {...rest} />;
    default:
      return null;
  }
};

export default FormikControl;
