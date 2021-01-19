import { Container, Section, DescriptionDate, Date } from "./styles";
import { getPatientExamThunk } from "../../store/modules/user/thunk";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
const PatientExam = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [examDetails, setExamDetails] = useState({});
  const user = useSelector((state) => state.user.patientProfile);
  const handleClick = (exam) => {
    setExamDetails(exam);
  };

  useEffect(() => {
    dispatch(getPatientExamThunk(id));
  }, []);

  return (
    <Container>
      <h1 className="container_title">Suas Consultas</h1>
      <Section>
        <Date>
          {user.exams?.map((exam, index) => (
            <button
              className="date_button"
              key={index}
              onClick={() => handleClick(exam)}
            >
              {exam.data}
            </button>
          ))}
        </Date>
        <DescriptionDate>
          <p className="descriptiondate_date">{examDetails.data}</p>
          <p className="descriptiondate_type">{examDetails.type}</p>
          <p className="descriptiondate_description">
            {examDetails.details ? examDetails.details : "Sem descrição"}
          </p>
        </DescriptionDate>
      </Section>
      <button class="container_button">Voltar</button>
    </Container>
  );
};

export default PatientExam;
