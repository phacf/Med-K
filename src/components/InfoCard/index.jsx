import { StyledCard } from "./styles";

const InfoCard = ({ title, text }) => {
  return (
    <StyledCard>
      <h1>{title}</h1>
      <p>{text}</p>
    </StyledCard>
  );
};

export default InfoCard;
