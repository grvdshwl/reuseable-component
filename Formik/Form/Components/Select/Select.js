import { ErrorMessage, Field } from "formik";
import React from "react";
import { ValidateRequired } from "../Helper/Helper";
import { FormDiv, FormError, FormLabel } from "../Input/Input.styles";

const Select = (props) => {
  const { label, name, id, options, required, ...rest } = props;

  const labelValue = ValidateRequired(label, required);

  const selectStyles = {
    marginTop: "20px",
    width: "220px",
    padding: "8px",
    outline: "none",
  };
  return (
    <FormDiv>
      <FormLabel htmlFor={name}>{labelValue}</FormLabel>
      <Field style={selectStyles} as="select" id={id} name={name} {...rest}>
        {options.map((option) => {
          return (
            <option key={option.value} value={option.value}>
              {option.key}
            </option>
          );
        })}
      </Field>
      <ErrorMessage name={name} component={FormError} />
    </FormDiv>
  );
};

export default Select;
