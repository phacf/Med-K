import styled from "styled-components";

import { colors } from "../../styles/colors";

export const StyledCard = styled.div`
  width: 90%;
  padding: 10px;
  margin: 0 auto;
  margin-top: 20px;
  border-radius: 10px;
  border-bottom: 6px solid ${colors.blue3};
  background-color: ${colors.blue1};

  h1 {
    color: ${colors.gray3};
    font-size: 1rem;
  }

  p {
    color: ${colors.gray2};
    font-size: 1rem;
  }

  @media screen and (min-width: 768px) {
    width: 95%;
  }
`;
