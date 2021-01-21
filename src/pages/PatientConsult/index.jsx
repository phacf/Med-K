import { Container, Section, DescriptionDate, Date, Page } from "./styles";
import { getPatientConfirm } from "../../store/modules/user/thunk";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

// alterar nome das requisições

const PatientConsult = () => {
  const dispatch = useDispatch();
  const [consultDetails, setConsultDetails] = useState({});
  const user = JSON.parse(localStorage.getItem("userInfo")).consultations;

  const handleClick = (consult) => {
    setConsultDetails(consult);
  };

  
 
  console.log(user)
  return (
    <Page>
      <Container>
        <h1 className="container_title">Suas Consultas</h1>
        <Section>
          <Date>
            {user && user.map((consult, index) => (
              <a
                //className="date_button"
                key={index}
                onClick={() => handleClick(consult, index)}
              >
                {consult.date}
              </a>
            ))}
          </Date>
          <DescriptionDate>
            <p className="descriptiondate_date">{consultDetails.data}</p>
            <p className="descriptiondate_type">{consultDetails.type}</p>
            <p className="descriptiondate_description">
              {consultDetails.especification ? (
                consultDetails.especification
              ) : (
                <p>Sem descrição</p>
              )}
            </p>
          </DescriptionDate>
        </Section>
        <button className="container_button to_back">Voltar</button>
      </Container>
    </Page>
  );
};

export default PatientConsult;
