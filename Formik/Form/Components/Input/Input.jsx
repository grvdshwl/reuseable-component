import React from "react";
import { Field, ErrorMessage } from "formik";
import { FormDiv, FormError, FormInput, FormLabel } from "./Input.styles";
import { ValidateRequired } from "../Helper/Helper";
const Input = (props) => {
  const { label, name, id, required, ...rest } = props;

  const labelValue = ValidateRequired(label, required);
  return (
    <FormDiv>
      <FormLabel htmlFor={name}> {labelValue}</FormLabel>
      <FormInput name={name} id={id} {...rest} />
      <ErrorMessage name={name} component={FormError} />
    </FormDiv>
  );
};

export default Input;
