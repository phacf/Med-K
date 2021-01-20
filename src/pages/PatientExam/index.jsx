import { Container, Section, DescriptionDate, Date, Page } from "./styles";
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
    <Page>
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
    </Page>
  );
};

export default PatientExam;
