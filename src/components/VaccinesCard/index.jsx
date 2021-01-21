import {
  StyledVaccinesCard,
  StyledCardHeader,
  StyledVaccinesInfo,
} from "./styles";

export default function Card({ local, type, date, next }) {
  return (
    <StyledVaccinesCard>
      <StyledCardHeader>{type ? <h1>{type}</h1> : "Vacina"}</StyledCardHeader>
      <StyledVaccinesInfo>
        {date && <h2>Data: {date}</h2>}
        {local && <h2>Local: {local}</h2>}
        {next && <h2>Proxima dose: {next}</h2>}
      </StyledVaccinesInfo>
    </StyledVaccinesCard>
  );
}
