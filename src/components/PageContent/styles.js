import styled from "styled-components";

export const StyledContent = styled.div`
  width: 90%;
  min-height: calculate(100vh - 60px);
  margin: 0 auto;

  @media screen and (min-width: 768px) {
    width: 95%;
    min-height: calculate(100vh - 80px);
  }
`;
