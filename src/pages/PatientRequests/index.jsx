import Slide from "react-reveal/Slide";

import Calendar from "./../../components/Calendar";
import PageTitle from "../../components/PageTitle";

import { StyledPatientsRequestContent } from "./styles";

const PatientRequest = () => {
  return (
    <StyledPatientsRequestContent>
      <PageTitle title={"Solicitações"} />
      <Slide bottom>
        <Calendar />
      </Slide>
    </StyledPatientsRequestContent>
  );
};

export default PatientRequest;
