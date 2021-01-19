import { Container, Section, DescriptionDate, Date } from "./styles";
<<<<<<< HEAD
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

=======

const PatientExam = () => {
>>>>>>> 17f3358671665ac86c030c31b04e6cfb00587ee9
  return (
    <Container>
      <h1 className="container_title">Suas Consultas</h1>
      <Section>
        <Date>
<<<<<<< HEAD
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
=======
          <button className="date_button">03/02</button>
        </Date>
        <DescriptionDate>
          <p className="descriptiondate_date">03/02</p>
          <p className="descriptiondate_type">Prostata</p>
          <p className="descriptiondate_description">
            lspalspalspalspalsaplspalspaslapslapslpalspalspalspalspalsaplspalspaslapslapslpalspalspalspalspalsaplspalspaslapslapslpalspalspalspalspalsaplspalspaslapslapslpalspalspalspalspalsaplspalspaslapslapslpalspalspalspalspalsaplspalspaslapslapslpalspalspalspalspalsaplspalspaslapslapslpalspalspalspalspalsaplspalspaslapslapslpalspalspalspalspalsaplspalspaslapslapslpalspalspalspalspalsaplspalspaslapslapslpalspalspalspalspalsaplspalspaslapslapslpalspalspalspalspalsaplspalspaslapslapslpalspalspalspalspalsaplspalspaslapslapslpalspalspalspalspalsaplspalspaslapslapslpalspalspalspalspalsaplspalspaslapslapslpalspalspalspalspalsaplspalspaslapslapslpalspalspalspalspalsaplspalspaslapslapslpalspalspalspalspalsaplspalspaslapslapslpalspalspalspalspalsaplspalspaslapslapslpalspalspalspalspalsaplspalspaslapslapslpalspalspalspalspalsaplspalspaslapslapslpalspalspalspalspalsaplspalspaslapslapslpalspalspalspalspalsaplspalspaslapslapslpalspalspalspalspalsaplspalspaslapslapslpalspalspalspalspalsaplspalspaslapslapslpalspalspalspalspalsaplspalspaslapslapslpalspalspalspalspalsaplspalspaslapslapslpalspalspalspalspalsaplspalspaslapslapslpalspalspalspalspalsaplspalspaslapslapslpalspalspalspalspalsaplspalspaslapslapslpalspalspalspalspalsaplspalspaslapslapslpalspalspalspalspalsaplspalspaslapslapslpalspalspalspalspalsaplspalspaslapslapslpalspalspalspalspalsaplspalspaslapslapslpa
>>>>>>> 17f3358671665ac86c030c31b04e6cfb00587ee9
          </p>
        </DescriptionDate>
      </Section>
      <button class="container_button">Voltar</button>
    </Container>
  );
};

export default PatientExam;
