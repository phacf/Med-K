import styled from "styled-components";

import { colors } from "../../styles/colors";

export const Content = styled.div`
  width: 100%;
  height: 75vh;
  min-height: 500px;
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
  }

  @media screen and (min-width: 768px) {
    width: fit-content;
    min-height: 420px;
    margin: 0;
    margin-right: 15%;
  }
`;

export const StyledForm = styled.form`
  min-width: 250px;
  display: flex;
  flex-direction: column;
  margin: 10% 0;

  div {
    width: 100%;
    position: relative;
    overflow: hidden;
    margin: 2% 0;
  }

  input {
    width: 100%;
    margin: 2% 0;
    padding-top: 20px;
    border: none;
    outline: none;
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

  label.email::after {
    border-bottom: 2px solid
      ${(props) => (props.emailError ? colors.blue4 : "red")};
  }

  label.password::after {
    border-bottom: 2px solid
      ${(props) => (props.passwordError ? colors.blue4 : "red")};
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
    padding: 4% 0;
    border: none;
    border-radius: 10px;
    margin-top: 10%;
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
    height: 10px;
    color: red;
    font-size: 0.8rem;
  }
`;
