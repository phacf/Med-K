import {
  StyledVaccinesCard,
  StyledCardHeader,
  StyledVaccinesInfo,
} from "./styles";

export default function Card(props) {
  return (
    <StyledVaccinesCard vaccines={props}>
      <StyledCardHeader>
        {props.type ? <h1>{props.type}</h1> : "Vacina"}
      </StyledCardHeader>
      <StyledVaccinesInfo>
        {props.date && <h2>Data: {props.date}</h2>}
        {props.local && <h2>Local: {props.local}</h2>}
        {props.next && <h2>Proxima dose: {props.next}</h2>}
      </StyledVaccinesInfo>
    </StyledVaccinesCard>
  );
}
