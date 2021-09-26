import { ErrorMessage, Field } from "formik";
import React from "react";
import { ValidateRequired } from "../Helper/Helper";
import { FormDiv, FormError, FormLabel } from "../Input/Input.styles";

const Radio = (props) => {
  const { label, options, name, required, ...rest } = props;
  const labelValue = ValidateRequired(label, required);

  return (
    <FormDiv>
      <FormLabel htmlFor={name}> {labelValue}</FormLabel>

      <Field name={name} {...rest}>
        {({ field }) => {
          return options.map((item) => {
            return (
              <React.Fragment key={item.key}>
                <input
                  type="radio"
                  id={item.value}
                  {...field}
                  value={item.value}
                  checked={item.value === field.value}
                />
                <label htmlFor={item.value}>{item.key}</label>
              </React.Fragment>
            );
          });
        }}
      </Field>
      <ErrorMessage name={name} component={FormError} />
    </FormDiv>
  );
};

export default Radio;
