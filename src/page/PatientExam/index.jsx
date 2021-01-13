import { Container, Section, DescriptionDate, Date } from "./styles";

const PatientExam = () => {
  return (
    <Container>
      <h1 className="container_title">Suas Consultas</h1>
      <Section>
        <Date>
          <button className="date_button">03/02</button>
        </Date>
        <DescriptionDate>
          <p className="descriptiondate_date">03/02</p>
          <p className="descriptiondate_type">Prostata</p>
          <p className="descriptiondate_description">
            lspalspalspalspalsaplspalspaslapslapslpalspalspalspalspalsaplspalspaslapslapslpalspalspalspalspalsaplspalspaslapslapslpalspalspalspalspalsaplspalspaslapslapslpalspalspalspalspalsaplspalspaslapslapslpalspalspalspalspalsaplspalspaslapslapslpalspalspalspalspalsaplspalspaslapslapslpalspalspalspalspalsaplspalspaslapslapslpalspalspalspalspalsaplspalspaslapslapslpalspalspalspalspalsaplspalspaslapslapslpalspalspalspalspalsaplspalspaslapslapslpalspalspalspalspalsaplspalspaslapslapslpalspalspalspalspalsaplspalspaslapslapslpalspalspalspalspalsaplspalspaslapslapslpalspalspalspalspalsaplspalspaslapslapslpalspalspalspalspalsaplspalspaslapslapslpalspalspalspalspalsaplspalspaslapslapslpalspalspalspalspalsaplspalspaslapslapslpalspalspalspalspalsaplspalspaslapslapslpalspalspalspalspalsaplspalspaslapslapslpalspalspalspalspalsaplspalspaslapslapslpalspalspalspalspalsaplspalspaslapslapslpalspalspalspalspalsaplspalspaslapslapslpalspalspalspalspalsaplspalspaslapslapslpalspalspalspalspalsaplspalspaslapslapslpalspalspalspalspalsaplspalspaslapslapslpalspalspalspalspalsaplspalspaslapslapslpalspalspalspalspalsaplspalspaslapslapslpalspalspalspalspalsaplspalspaslapslapslpalspalspalspalspalsaplspalspaslapslapslpalspalspalspalspalsaplspalspaslapslapslpalspalspalspalspalsaplspalspaslapslapslpalspalspalspalspalsaplspalspaslapslapslpalspalspalspalspalsaplspalspaslapslapslpa
          </p>
        </DescriptionDate>
      </Section>
      <button class="container_button">Voltar</button>
    </Container>
  );
};

export default PatientExam;
