import { StyledCard, InfoContainer, StyledButton } from "./styles";

const PendencyCard = ({ name, description, confirmed }) => {
  console.log(name, description, confirmed);

  return (
    <StyledCard>
      <InfoContainer>
        <h1>{name}</h1>
        <p>{description}</p>
      </InfoContainer>
      <StyledButton confirmed={confirmed}>
        {confirmed ? "Confirmado" : "Confirmar"}
      </StyledButton>
    </StyledCard>
  );
};
export default PendencyCard;
