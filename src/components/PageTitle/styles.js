import styled from "styled-components";

import { colors } from "../../styles/colors";

export const StyledPageTitle = styled.div`
  h1 {
    color: ${colors.gray3};
    font-size: 3rem;
    font-variant: small-caps;
  }
  hr {
    margin-top: 0;
    padding-top: 0;
    border-color: ${colors.blue3};
  }
`;
