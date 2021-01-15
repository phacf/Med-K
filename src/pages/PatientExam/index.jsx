import { Container, Section, DescriptionDate, Date } from "./styles";
import { useSelector } from "react-redux";
const PatientExam = () => {
  const user = useSelector((state) => state.user.patientProfile);
  console.log(user);
  return (
    <Container>
      <h1 className="container_title">Suas Consultas</h1>
      <Section>
        <Date>
          <button className="date_button">
            {user.exams?.map(({ data }) => data)}
          </button>
        </Date>
        <DescriptionDate>
          <p className="descriptiondate_date">{user.data}</p>
          <p className="descriptiondate_type">{user.type}</p>
          <p className="descriptiondate_description">
            {user.description ? user.description : "Sem descrição"}
          </p>
        </DescriptionDate>
      </Section>
      <button class="container_button">Voltar</button>
    </Container>
  );
};

export default PatientExam;
