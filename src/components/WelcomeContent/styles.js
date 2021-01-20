import styled from "styled-components";

import { colors } from "../../styles/colors";

import doctorPageBg from "../../assets/doctorPageBg.jpg";
import patientPageBg from "../../assets/patientPageBg.jpg";

export const StyledContent = styled.div`
  width: 100%;
  height: 100%;
  min-height: calc(100vh - 60px);
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 1)),
    url(${(props) => (props.isMedic ? doctorPageBg : patientPageBg)});
  background-size: cover;

  h1 {
    font-size: 2.5rem;
    color: ${colors.blue1};
    text-align: center;
  }

  @media screen and (min-width: 768px) {
    min-height: calc(100vh - 80px);
    justify-content: flex-end;

    h1 {
      margin-right: 2.5%;
      font-size: 5rem;
      text-align: right;
    }
  }
`;
