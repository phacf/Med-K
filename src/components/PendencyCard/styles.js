import styled from "styled-components";

import { colors } from "../../styles/colors";

export const StyledCard = styled.div`
  width: 100%;
  height: 200px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  margin-top: 20px;
  border-radius: 10px;
  border-bottom: 6px solid ${colors.blue3};
  background-color: ${colors.blue1};

  h1 {
    color: ${colors.gray3};
  }

  @media screen and (min-width: 768px) {
    width: 49%;
  }
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: flex-start;
  padding: 10px;
`;

export const StyledButton = styled.button`
  width: 20%;
  min-width: 100px;
  outline: none;
  border: none;
  padding: 10px 20px;
  border-radius: 10px;
  color: ${colors.gray3};
  background-color: ${(props) => (props.confirmed ? "#F68173" : "#61C2A1")};
  cursor: ${(props) => (props.confirmed ? "not-allowed" : "pointer")};

  :hover {
    transition: 0.3s;
    background-color: ${(props) => !props.confirmed && "#419f72"};
  }
`;
