import React from "react";
import { useFormik } from "formik";
import { FormDiv, MainDiv, FormInput, Button } from "./Formik.styles.js";
import * as Yup from "yup";

const Formik = () => {
  const initialValues = {
    name: "",
    email: "",
    channel: "",
  };

  const validationSchema = Yup.object({
    name: Yup.string().required("Required"),
    email: Yup.string().email("Invalid email format").required("Required"),
    channel: Yup.string().required("Required"),
  });

  const onSubmit = (values) => {
    console.log("submitted values", values);
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });

  return (
    <>
      <form onSubmit={formik.handleSubmit}>
        <MainDiv>
          <div>
            <FormDiv>
              <label style={{ marginRight: "20px" }} htmlFor="name">
                Name{" "}
              </label>
              <FormInput
                type="text"
                value={formik.values.name}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                id="name"
                name="name"
              />
              {formik.touched.name && formik.errors.name ? (
                <div style={{ color: "red", marginLeft: "50px" }}>
                  {" "}
                  {formik.errors.name}
                </div>
              ) : (
                <div></div>
              )}
            </FormDiv>
            <FormDiv>
              <label htmlFor="email" style={{ marginRight: "20px" }}>
                Email{" "}
              </label>
              <FormInput
                type="email"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                id="email"
                name="email"
              />
              {formik.touched.email && formik.errors.email ? (
                <div style={{ color: "red", marginLeft: "50px" }}>
                  {" "}
                  {formik.errors.email}
                </div>
              ) : (
                <div></div>
              )}
            </FormDiv>
            <FormDiv>
              <label htmlFor="channel" style={{ marginRight: "20px" }}>
                Channel{" "}
              </label>
              <FormInput
                type="text"
                value={formik.values.channel}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                id="channel"
                name="channel"
              />
              {formik.touched.channel && formik.errors.channel ? (
                <div style={{ color: "red", marginLeft: "60px" }}>
                  {" "}
                  {formik.errors.channel}
                </div>
              ) : (
                <div></div>
              )}
            </FormDiv>
            <Button type="submit">Submit</Button>
          </div>
        </MainDiv>
      </form>
    </>
  );
};

export default Formik;
