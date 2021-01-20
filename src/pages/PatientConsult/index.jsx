import { Container, Section, DescriptionDate, Date, Page } from "./styles";
import { getPatientConfirm } from "../../store/modules/user/thunk";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

// alterar nome das requisições

const PatientConsult = () => {
  const dispatch = useDispatch();
  const [consultDetails, setConsultDetails] = useState({});
  const user = useSelector((state) => state.user.userInfo);

  const handleClick = (consult) => {
    setConsultDetails(consult);
  };
  console.log(user);
  const confirmConsult = () => {
    const consult = { ...consultDetails, isConfirm: true };
    const newConsults = user.consultations.map(({ type }, index, arr) => {
      if (type === consult.type) {
        arr.splice(index, 1);
        arr.push(consult);
      }
      return arr;
    });
    dispatch(getPatientConfirm(...newConsults));
  };

  return (
    <Page>
      <Container>
        <h1 className="container_title">Suas Consultas</h1>
        <Section>
          <Date>
            {user.consultations?.map((consult, index) => (
              <button
                className="date_button"
                key={index}
                onClick={() => handleClick(consult, index)}
              >
                {consult.data}
              </button>
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
        <button className="container_button to_back">Voltar</button>
        {consultDetails.isConfirm ? (
          <button className="container_button" disabled>
            Confirmado
          </button>
        ) : (
          <button className="container_button" onClick={() => confirmConsult()}>
            Confirmar
          </button>
        )}
      </Container>
    </Page>
  );
};

export default PatientConsult;
