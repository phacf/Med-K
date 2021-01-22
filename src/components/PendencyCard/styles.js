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
<<<<<<< Updated upstream
  background-color: ${(props) => (props.confirmed ? "red" : "green")};
=======
  outline: none;
  border: none;
  padding: 10px 20px;
  border-radius: 10px;
  color: ${colors.gray3};
  background-color: ${(props) => (props.confirmed ? "#61C2A1" : "#F68173")};
  cursor: ${(props) => (props.confirmed ? "not-allowed" : "pointer")};

  :hover {
    transition: 0.3s;
    background-color: ${(props) => !props.confirmed && "#419f72"};
  }
>>>>>>> Stashed changes
`;
