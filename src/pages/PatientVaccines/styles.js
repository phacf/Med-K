import styled from "styled-components";

import { colors } from "../../styles/colors";

export const StyledDiv = styled.div`
  width: 100%;
  min-height: calc(100vh - 60px);
  ${(props) => !props.vaccines && "display: flex;"}
  ${(props) => !props.vaccines && "justify-content: center;"}
  ${(props) => !props.vaccines && "align-items: center;"}

  @media screen and (min-width: 768px) {
    min-height: calc(100vh - 80px);
  }
`;

export const StyledVaccinesContent = styled.div`
  width: 90%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  margin: 0 auto;
  padding-bottom: 20px;
  text-align: center;

  h1 {
    color: ${colors.gray3};
  }

  @media screen and (min-width: 769px) {
    width: 95%;
  }
`;
