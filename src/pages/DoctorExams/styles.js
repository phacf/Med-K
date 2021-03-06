import styled from "styled-components";

import { colors } from "../../styles/colors";

export const Container = styled.div`
  width: 90%;
  margin: 20px auto;
  color: ${colors.gray2};

  label.ant-form-item-required {
    color: ${colors.gray2} !important;
  }

  @media screen and (min-width: 768px) {
    width: 95%;
  }
`;

export const ContainerForm = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  background: ${colors.blue1};
  height: 50vh;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    height: auto;
    flex-direction: column;
  }
`;

export const SectionData = styled.section`
  width: 20%;
  min-width: 300px;
  text-align: center;
  border-right: 1px solid rgb(193, 206, 255);
  h2 {
    text-align: center;
    padding: 10px;
    color: ${colors.gray2};
    font-variant: small-caps;
    text-decoration: underline;
  }
  div.scroll-history {
    height: 45vh;
    overflow-y: ${(props) => (props.scroll ? "auto" : "hidden")};
  }
  @media (max-width: 768px) {
    width: 100%;
    border: none;
  }
`;

export const NewButton = styled.button`
  background: none;
  border: none;
  margin: 2px;

  &:focus {
    border: none;
    outline: none;
    background: rgba(214, 214, 258, 0.8);
  }
  &:active {
    border: none;
    outline: none;
  }
  &:hover {
    background-color: rgb(214, 214, 258);
  }
`;

export const SectionDescription = styled.section`
  width: 75%;
  margin-left: 20px;
  h2 {
    text-align: center;
    padding: 10px;
    color: ${colors.gray2};
    font-variant: small-caps;
    text-decoration: underline;
  }
  div.scroll-history {
    height: 45vh;
    overflow-y: ${(props) => (props.scroll ? "auto" : "hidden")};
  }
  div h3 {
    font-size: 20px;
    font-variant: small-caps;
  }
  div h4 {
    font-variant: all-small-caps;
    font-weight: bold;
  }
  div.description-exams {
    min-height: 30vh;
    overflow-y: "auto";
  }
  div p {
    text-indent: 20px;
    margin: 20px 10px;
  }
  @media (max-width: 768px) {
    border-top: 1px solid rgb(193, 206, 255);
    width: 100%;
    margin: 10px 0;
    padding: 20px;
  }
`;

export const NewSelect = styled.section`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 20px;
  h2 {
    margin: 0 10px 0 0;
    color: ${colors.gray2};
    font-variant: small-caps;
  }
`;
