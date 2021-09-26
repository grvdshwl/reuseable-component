import { ErrorMessage, Field } from "formik";
import React from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import { FormDiv, FormError, FormLabel } from "../Input/Input.styles";

const Date = (props) => {
  const { name, label, ...rest } = props;
  return (
    <FormDiv>
      <FormLabel htmlFor={name}>{label}</FormLabel>
      <Field name={name}>
        {({ form, field }) => {
          const { value } = field;
          const { setFieldValue } = form;
          return (
            <DatePicker
              id={name}
              {...field}
              {...rest}
              selected={value}
              onChange={(val) => setFieldValue(name, val)}
            />
          );
        }}
      </Field>
      <ErrorMessage name={name} component={FormError} />
    </FormDiv>
  );
};

export default Date;
