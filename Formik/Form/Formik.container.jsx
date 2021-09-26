import React from "react";
import * as Yup from "yup";
import { Formik, Form } from "formik";
import FormikControl from "./Formik.control";
import { Button, Container, FormDiv } from "./Formik.styles.js";

const FormikContainer = () => {
  const initialValues = {
    email: "",
    description: "",
    selectOption: "",
    radioOption: "",
    checkboxOption: [],
    birthDate: null,
  };
  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid email format").required("*Required"),
    description: Yup.string().required("*Required"),
    selectOption: Yup.string().required("*Required"),
    radioOption: Yup.string().required("*Required"),
    checkboxOption: Yup.array().min(1, "*Required").required("*Required"),
    birthDate: Yup.date().required("*Required").nullable(),
  });
  const onSubmit = (values, onSubmitProps) => {
    console.log("Form Data", JSON.parse(JSON.stringify(values)));
    onSubmitProps.resetForm();
  };

  const dropdownOptions = [
    { key: "Select and option", value: "" },
    { key: "Option 1", value: "option 1" },
    { key: "Option 2", value: "option 2" },
    { key: "Option 3", value: "option 3" },
  ];

  const radioOptions = [
    { key: "Radio 1", value: "radio 1" },
    { key: "Radio 2", value: "radio 2" },
    { key: "Radio 3", value: "radio 3" },
  ];

  const checkboxOptions = [
    { key: "Checkbox 1", value: "checkbox 1" },
    { key: "Checkbox 2", value: "checkbox 2" },
    { key: "Checkbox 3", value: "checkbox 3" },
  ];

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {(formik) => {
        return (
          <Container>
            <Form>
              <FormDiv>
                <FormikControl
                  control="input"
                  name="email"
                  id="email"
                  type="email"
                  label="Email"
                  required
                />
                <FormikControl
                  control="textarea"
                  name="description"
                  id="description"
                  label="Description"
                  required
                />
                <FormikControl
                  control="select"
                  name="selectOption"
                  id="selectOption"
                  label="Select a topic"
                  options={dropdownOptions}
                  required
                />
                <FormikControl
                  name="radioOption"
                  control="radio"
                  label="select a value"
                  options={radioOptions}
                  required
                />
                <FormikControl
                  name="checkboxOption"
                  control="checkbox"
                  label="Checkbox topics"
                  options={checkboxOptions}
                  required
                />
                <FormikControl
                  name="birthDate"
                  control="date"
                  label="Select Birthday"
                />
                <FormikControl name="image" control="photo" />

                <Button type="submit" disabled={!formik.isValid}>
                  {" "}
                  Submit
                </Button>
              </FormDiv>
            </Form>
          </Container>
        );
      }}
    </Formik>
  );
};

export default FormikContainer;
