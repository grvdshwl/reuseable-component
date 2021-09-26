import styled, { css } from "styled-components";
import { Field } from "formik";
export const FormInput = styled(Field)`
  width: 300px;
  height: 25px;
  margin-left: 10px;
  border: none;
  border-bottom: 1px solid black;
  outline: none;
  font-family: "Quicksand", sans-serif;

  -webkit-box-shadow: 0 0 0px 1000px white inset;
`;

export const Input = styled.input`
  width: 250px;
  height: 25px;
  margin-left: 10px;
  border: none;
  border-bottom: 1px solid black;
  outline: none;
  font-family: "Quicksand", sans-serif;

  -webkit-box-shadow: 0 0 0px 1000px white inset;
  margin-right: 20px;
`;
export const FormDiv = styled.div`
  margin-bottom: 20px;
  align-items: flex-end;
`;

export const MainDiv = styled.div`
  display: flex;
  justify-content: center;
`;

const disabledButton = css`
  opacity: 0.5;
`;

export const Button = styled.button`
  padding: 12px 30px;
  color: white;
  background-color: black;
  outline: none;
  border: none;
  cursor: pointer;
  margin-left: 20px;

  ${({ disabled }) => disabled && disabledButton}

  &:hover {
    background-color: white;
    color: black;
    border: 1px solid black;
  }
`;

export const FormError = styled.div`
  margin-left: 80px;
  color: red;
`;
