import Slide from "react-reveal/Slide";

import PageTitle from "../../components/PageTitle";

import { Container, StyledPatientRequests } from "./styles";

const PatientRequest = () => {
  const userInfo = JSON.parse(localStorage.getItem("userInfo"));

  return (
    <Container>
      <PageTitle title={"Solicitações"} />
      <StyledPatientRequests>
        <Slide bottom></Slide>
      </StyledPatientRequests>
    </Container>
  );
};

export default PatientRequest;
