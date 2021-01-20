import styled from "styled-components";

import { colors } from "../../styles/colors";

export const StyledImageDiv = styled.div`
  width: 100%;
  height: 250px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 15px;
  overflow: hidden;
  background: radial-gradient(circle, #fff 0%, ${colors.blue3} 100%);

  img {
    width: 100%;
  }

  @media screen and (min-width: 768px) {
    align-items: flex-start;
    img {
      width: 612px;
    }
  }
`;

export const CardsContent = styled.div`
  padding-bottom: 20px;
`;
