import styled from "styled-components";

import { colors } from "../../styles/colors";

export const StyledVaccinesCard = styled.div`
  width: 100%;
  height: 23vh;
  min-height: 150px;
  display: flex;
  flex-flow: wrap column;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
  border-radius: 10px;
  box-shadow: 4px 4px 16px 8px rgba(0, 0, 0, 0.25);

  @media screen and (min-width: 768px) {
    width: 32%;
  }
`;

export const StyledCardHeader = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${colors.gray3};
  background-color: ${colors.blue2};
  border-radius: 10px 0;
  box-shadow: inset 4px 4px 16px 8px rgba(0, 0, 0, 0.25);
`;

export const StyledVaccinesInfo = styled.div`
  width: 100%;
  height: calc(100% - 50px);
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;

  h2 {
    color: ${colors.gray2};
    font-size: 1rem;
  }
`;
