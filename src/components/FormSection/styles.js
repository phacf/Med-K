import styled from "styled-components";

import { colors } from "../../styles/colors";

import background from "../../assets/background.jpg";

export const StyledMain = styled.section`
  width: 100vw;
  height: 100vh;
  max-width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url(${background});
  background-size: cover;
  background-position-x: 95%;

  @media screen and (min-width: 768px) {
    background: ${colors.blue1};
  }
`;

export const Content = styled.div`
  width: 90%;
  height: 90vh;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (min-width: 768px) {
    width: 100%;
    height: 70vh;
    min-height: 390px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    background-image: url(${background});
    background-size: cover;
  }
`;
