import { Field } from "formik";
import styled from "styled-components";

export const FormLabel = styled.label`
  display: flex;
  align-self: flex-start;
  margin-right: 12px;
  font-size: 18px;
  font-weight: 600;
`;

export const FormInput = styled(Field)`
  width: 200px;
  outline: none;
  border: none;
  border-bottom: 1px solid black;
  padding: 5px;
  box-shadow: 0px 0px 0px 1000px white inset;
  margin-bottom: 5px;
`;

export const FormError = styled.div`
  color: red;
  margin-left: 50px;
`;

export const FormDiv = styled.div`
  margin-top: 50px;
  height: 60px;
`;
