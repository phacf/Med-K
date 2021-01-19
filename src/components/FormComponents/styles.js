import styled from "styled-components";

import { colors } from "../../styles/colors";

export const Content = styled.div`
  width: 100%;
  height: 100%;
  min-height: 550px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2% 5%;
  border-radius: 10px;
  background-color: #fff;
  box-shadow: 4px 4px 16px 8px rgba(0, 0, 0, 0.25);

  img {
    width: 140px;
    margin-bottom: 20px;
  }

  h1 {
    margin-bottom: 10px;
    color: ${colors.gray2};
  }

  @media screen and (min-width: 768px) {
    width: fit-content;
    min-height: 550px;
    margin: 0;
    margin-right: 15%;
  }
`;

export const StyledForm = styled.form`
  min-width: 250px;
  display: flex;
  flex-direction: column;

  div {
    width: 100%;
    position: relative;
    overflow: hidden;
    margin: 4px 0;
  }

  div.radioContent {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0;
  }

  div.radioInfo {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    margin: 0;
  }

  input {
    width: 100%;
    margin: 2% 0;
    padding-top: 18px;
    border: none;
    outline: none;
    color: ${colors.gray2};
  }

  input.inputRadio {
    color: ${colors.gray2};
  }

  label {
    width: 100%;
    height: 100%;
    position: absolute;
    bottom: 0;
    left: 0;
    pointer-events: none;
    border-bottom: 1px solid ${colors.gray1};
  }

  label.labelRadio {
    color: ${colors.gray2};
    position: relative;
    border-bottom: none;
  }

  label::after {
    width: 100%;
    height: 100%;
    position: absolute;
    bottom: -1px;
    left: 0;
    content: "";
    transform: translateX(-100%);
    transition: transform 0.3s ease;
  }

  label.name::after {
    border-bottom: 2px solid
      ${(props) => (props.nameError ? colors.blue4 : "red")};
  }

  label.email::after {
    border-bottom: 2px solid
      ${(props) => (props.emailError ? colors.blue4 : "red")};
  }

  label.document::after {
    border-bottom: 2px solid
      ${(props) => (props.documentError ? colors.blue4 : "red")};
  }

  label.password::after {
    border-bottom: 2px solid
      ${(props) => (props.passwordError ? colors.blue4 : "red")};
  }

  label.passwordCheck::after {
    border-bottom: 2px solid
      ${(props) => (props.passwordCheckError ? colors.blue4 : "red")};
  }

  span {
    position: absolute;
    bottom: 5px;
    left: 0;
    transition: all 0.3s ease;
    font-size: 0.9rem;
    color: ${colors.gray2};
  }

  input:focus + label span,
  input:valid + label span {
    transform: translateY(-150%);
    font-size: 0.8rem;
    color: ${colors.blue4};
  }

  input:focus label::after,
  input:valid + label::after {
    transform: translateX(0);
  }

  button {
    padding: 8px 0;
    border: none;
    border-radius: 10px;
    margin: 10px 0;
    outline: none;
    font-size: 1rem;
    color: ${colors.gray2};
    background-color: ${colors.blue2};
    cursor: pointer;
  }

  button:hover {
    transition: 0.3s;
    background-color: ${colors.blue3};
  }

  p {
    height: 15px;
    color: red;
    font-size: 0.8rem;
  }
`;
