import { ErrorMessage, Field } from "formik";
import React from "react";
import { ValidateRequired } from "../Helper/Helper";
import { FormDiv, FormError, FormLabel } from "../Input/Input.styles";
import { FormTextArea } from "./TextArea.styles";

const textAreaStyles = {
  width: "220px",
  border: "none",
  borderBottom: "1px solid black",
  outline: "none",
  boxShadow: "0px 0px 0px 1000px white inset",
};

const TextArea = (props) => {
  const { name, label, id, required, ...rest } = props;

  const labelValue = ValidateRequired(label, required);
  return (
    <FormDiv>
      <FormLabel htmlFor={name}> {labelValue}</FormLabel>
      <Field
        style={textAreaStyles}
        as="textarea"
        rows="4"
        name={name}
        id={id}
        {...rest}
      />
      <ErrorMessage name={name} component={FormError} />
    </FormDiv>
  );
};

export default TextArea;
