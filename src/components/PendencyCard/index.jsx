import { api } from "../../services/api";
import { useState } from "react";
import { StyledCard, InfoContainer, StyledButton } from "./styles";

const PendencyCard = ({ patient, request }) => {
  const [confirm, setConfirm] = useState(request.isConfirm);

  const onButton = (evt) => {
    setConfirm(true);
    let patientRequests = patient.patientRequests.filter(
      (res) => res.id !== request.id
    );

    request.isConfirm = true;
    let consultations = patient.consultations
      ? [...patient.consultations, request]
      : [request];
    api
      .patch(`users/${patient.id}`, { patientRequests, consultations })
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  };

  return (
    <StyledCard>
      <InfoContainer>
        <h1>Paciente: {patient.name}</h1>
        <h2>Consulta: {request.type}</h2>
        <h3>Data: {request.data}</h3>
        <p>Motivo: {request.description}</p>
      </InfoContainer>
      <StyledButton onClick={onButton} confirmed={confirm}>
        {confirm ? "Confirmado" : "Confirmar"}
      </StyledButton>
    </StyledCard>
  );
};
export default PendencyCard;
