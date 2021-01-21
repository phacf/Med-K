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

export const StyledPatientRequests = styled.div`
  width: 100%;
  height: 70vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${colors.blue1};
`;
