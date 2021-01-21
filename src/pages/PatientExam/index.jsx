import { Container, Section, DescriptionDate, Date, Page } from "./styles";
import { getPatientExamThunk } from "../../store/modules/user/thunk";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
const PatientExam = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [examDetails, setExamDetails] = useState({});
  const user = JSON.parse(localStorage.getItem("userInfo")).exams;
  const handleClick = (exam) => {
    setExamDetails(exam);
  };



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
           <p className="descriptiondate_date">{examDetails.data}</p>
            <p className="descriptiondate_type">{examDetails.type}</p>
            <p className="descriptiondate_description">
              {examDetails.especification ? (
                examDetails.especification
              ) : (
                <p>Sem descrição</p>
              )}
            </p>
          </DescriptionDate>
        </Section>
        <button class="container_button">Voltar</button>
      </Container>
    </Page>
  );
};

export default PatientExam;
