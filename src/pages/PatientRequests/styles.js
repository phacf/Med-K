import styled from "styled-components";

import { colors } from "../../styles/colors";

export const StyledPatientsRequestContent = styled.div`
  width: 100vw;
  min-height: calc(100vh - 60px);
  padding: 20px 0;

  h2 {
    text-align: center;
    padding: 10px;
    color: ${colors.gray2};
    font-variant: small-caps;
    text-decoration: underline;
  }
  @media screen and (min-width: 768px) {
    width: 95%;
    min-height: calc(100vh - 80px);
  }
`;

export const Content = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
