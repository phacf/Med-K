import styled from "styled-components";

import { colors } from "../../styles/colors";
export const StyledCard = styled.div`
  width: 100%;
  height: 20vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  background-color: ${colors.blue1};
`;
export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`;
export const StyledButton = styled.button`
  background-color: ${(props) => (props.confirmed ? "red" : "green")};
`;
