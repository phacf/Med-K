import { Container, Section, DescriptionDate, Date, Page } from "./styles";
import { useState } from "react";

// alterar nome das requisições

const PatientConsult = () => {
  const [consultDetails, setConsultDetails] = useState({});
  const user = JSON.parse(localStorage.getItem("userInfo")).consultations;

  const handleClick = (consult) => {
    setConsultDetails(consult);
  };

  console.log(user);
  return (
    <Page>
      <Container>
        <h1 className="container_title">Suas Consultas</h1>
        <Section>
          <Date>
            {user &&
              user.map((consult, index) => (
                <a key={index} onClick={() => handleClick(consult, index)}>
                  {consult.data}
                </a>
              ))}
          </Date>
          <DescriptionDate>
            <p className="descriptiondate_date">{consultDetails.data}</p>
            <p className="descriptiondate_type">{consultDetails.type}</p>
            <p className="descriptiondate_description">
              {consultDetails.description ? (
                consultDetails.description
              ) : (
                <p>Sem descrição</p>
              )}
            </p>
          </DescriptionDate>
        </Section>
      </Container>
    </Page>
  );
};

export default PatientConsult;
