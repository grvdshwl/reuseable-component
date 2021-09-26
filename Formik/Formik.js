import React from "react";
import { Formik, Form, ErrorMessage, FieldArray, Field } from "formik";
import {
  FormDiv,
  MainDiv,
  FormInput,
  Button,
  Input,
  FormError,
} from "./Formik.styled.js";
import * as Yup from "yup";

const FormikForm = () => {
  const initialValues = {
    name: "",
    email: "",
    channel: "",
    comments: "",
    address: "",
    social: {
      facebook: "",
    },
    phoneNumbers: [" "],
  };

  const validationSchema = Yup.object({
    name: Yup.string().required("Required"),
    email: Yup.string().email("Invalid email format").required("Required"),
    channel: Yup.string().required("Required"),
    comments: Yup.string().required("Required"),
    address: Yup.string().required("Required"),
  });

  const onSubmit = (values, onSubmitProps) => {
    console.log("submitted values", values);
    onSubmitProps.setSubmitting(false);
    onSubmitProps.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {(formik) => {
        return (
          <Form>
            <MainDiv>
              <div>
                <FormDiv>
                  <label style={{ marginRight: "20px" }} htmlFor="name">
                    Name{" "}
                  </label>
                  <FormInput type="text" id="name" name="name" />
                  <FormError>
                    {" "}
                    <ErrorMessage name="name" />{" "}
                  </FormError>
                </FormDiv>
                <FormDiv>
                  <label htmlFor="email" style={{ marginRight: "20px" }}>
                    Email{" "}
                  </label>
                  <FormInput type="email" id="email" name="email" />
                  <FormError>
                    {" "}
                    <ErrorMessage name="email" />
                  </FormError>
                </FormDiv>
                <FormDiv>
                  <label htmlFor="channel" style={{ marginRight: "20px" }}>
                    Channel{" "}
                  </label>
                  <FormInput type="text" id="channel" name="channel" />
                  <FormError>
                    {" "}
                    <ErrorMessage name="channel" />{" "}
                  </FormError>
                </FormDiv>
                <FormDiv>
                  <label htmlFor="comments">Comments</label>
                  <FormInput name="comments" id="comments" />{" "}
                  <ErrorMessage name="comments" component={FormError} />{" "}
                </FormDiv>
                <FormDiv>
                  <label htmlFor="address"> Address</label>
                  <FormInput name="address">
                    {({ form, meta, field }) => {
                      return (
                        <>
                          <Input type="text" id="address" {...field} />
                          {meta.touched && meta.error && (
                            <FormError> {meta.error}</FormError>
                          )}
                        </>
                      );
                    }}
                  </FormInput>
                </FormDiv>
                <FormDiv>
                  <label htmlFor="facebook" style={{ marginRight: "20px" }}>
                    Facebook{" "}
                  </label>
                  <FormInput type="text" id="facebook" name="social.facebook" />
                  <FormError>
                    {" "}
                    <ErrorMessage name="facebook" />{" "}
                  </FormError>
                </FormDiv>
                <FormDiv>
                  <label htmlFor="phoneNumbers">Phone Numbers</label>
                  <FieldArray name="phoneNumbers">
                    {(fieldArrayProps) => {
                      const { form, push, remove } = fieldArrayProps;
                      const { values } = form;
                      const { phoneNumbers } = values;

                      return (
                        <div>
                          {phoneNumbers.map((phNumber, index) => (
                            <div key={index}>
                              <FormInput name={`phoneNumbers[${index}]`} />
                              {index > 0 && (
                                <Button
                                  type="button"
                                  onClick={() => {
                                    remove(index);
                                  }}
                                >
                                  {" "}
                                  -
                                </Button>
                              )}
                              <Button
                                type="button"
                                onClick={() => {
                                  push(" ");
                                }}
                              >
                                {" "}
                                +{" "}
                              </Button>
                            </div>
                          ))}
                        </div>
                      );
                    }}
                  </FieldArray>
                </FormDiv>
                <Button type="reset">Reset</Button>
                <Button
                  type="submit"
                  disabled={!formik.isValid || formik.isSubmitting}
                >
                  Submit
                </Button>
              </div>
            </MainDiv>
          </Form>
        );
      }}
    </Formik>
  );
};

export default FormikForm;
