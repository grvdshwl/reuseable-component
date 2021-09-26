import styled, { css } from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
`;

export const FormDiv = styled.div`
  margin-top: 50px;
`;

const disabledButton = css`
  opacity: 0.3;
  &:hover {
    color: white;
    background-color: black;
    border: none;
  }
`;

export const Button = styled.button`
  margin-top: 45px;
  padding: 12px 30px;
  color: white;
  background-color: black;
  outline: none;
  border: none;
  cursor: pointer;
  margin-left: 20px;

  &:hover {
    background-color: white;
    color: black;
    border: 1px solid black;
  }
  ${({ disabled }) => disabled && disabledButton}
`;
