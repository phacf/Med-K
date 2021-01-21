import Slide from "react-reveal/Slide";

import Calendar from "./../../components/Calendar";

import { StyledPatientsRequestContent } from "./styles";

const PatientRequest = () => {
  return (
    <StyledPatientsRequestContent>
      <Slide bottom>
        <Calendar />
      </Slide>
    </StyledPatientsRequestContent>
  );
};

export default PatientRequest;
