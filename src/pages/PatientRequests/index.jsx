import Slide from "react-reveal/Slide";

import PageTitle from "../../components/PageTitle";

import { StyledPatientRequests } from "./styles";

const PatientRequest = () => {
  return (
    <StyledPatientRequests>
      <PageTitle title={"Solicitações"} />
      <Slide bottom></Slide>
    </StyledPatientRequests>
  );
};

export default PatientRequest;
