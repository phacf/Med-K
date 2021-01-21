import styled from "styled-components";

import { colors } from "../../styles/colors";

export const Container = styled.div`
  width: 90%;
  min-height: calc(100vh - 60px);
  margin: 0 auto;

  @media screen and (min-width: 768px) {
    width: 95%;
    min-height: calc(100vh - 80px);
  }
`;

export const StyledDiv = styled.div`
  width: 100%;

  h1 {
    text-align: center;
  }

  div.react-reveal {
    width: 100%;
    height: 100%;
  }
`;

export const StyledVaccinesContent = styled.div`
  width: 100%;
  min-height: calc(100vh - 164px);
  display: flex;
  justify-content: ${(props) => (!props.vaccines ? "center" : "space-between")};
  align-items: ${(props) => (!props.vaccines ? "center" : "flex-start")};
  flex-wrap: wrap;
  margin: 0 auto;
  padding-bottom: 20px;
  text-align: center;

  h1 {
    color: ${colors.gray3};
  }
`;
