import axios from "axios";
import "antd/dist/antd.css";
import { useState, useEffect } from "react";
import { Empty } from "antd";

import SelectPatients from "../../components/SelectPatients";
import {
  Container,
  ContainerForm,
  SectionData,
  SectionDescription,
  TitlePage,
  NewSelect,
  NewButton,
} from "./styles";

const DoctorExams = () => {
  const [patients, setPatient] = useState([]);
  const [history, setHistory] = useState("");
  const [exam, setExam] = useState(undefined);

  const handleDate = (evt) => {
    setExam(history.exams[evt.target.id]);
  };

  useEffect(() => {
    const token = localStorage.getItem("authToken");

    axios
      .get("https://api-capstone-medik.herokuapp.com/users?type=patient", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        setPatient(res.data);
      });
  }, []);

  return (
    <Container>
      <TitlePage>
        <h1>Exames</h1>
        <hr />
      </TitlePage>
      <NewSelect>
        <h2>Paciente:</h2>
        <SelectPatients
          setHistory={setHistory}
          patients={patients}
          setExam={setExam}
        />
      </NewSelect>
      <ContainerForm>
        <SectionData>
          <h2>Data</h2>
          {!!history.exams ? (
            history.exams.map((exam, index) => {
              return (
                <div>
                  <NewButton key={index} onClick={handleDate} id={index}>
                    {exam.data
                      .replace(/[A-Z].*Z/, "")
                      .split("-")
                      .reverse()
                      .join("-")}
                  </NewButton>
                </div>
              );
            })
          ) : (
            <Empty description="Não possui histórico" />
          )}
        </SectionData>
        <SectionDescription>
          <div>
            <h2>Descrição</h2>
            {exam ? (
              <div>
                <h3>Procedimento: {exam.type}</h3>
                <h4>
                  Data:
                  {exam.data
                    .replace(/[A-Z].*Z/, "")
                    .split("-")
                    .reverse()
                    .join("-")}
                </h4>
                <div className="description-exams">
                  <p>Descrição: {exam.description}</p>
                </div>
              </div>
            ) : (
              <Empty description="Não possui histórico" />
            )}
          </div>
        </SectionDescription>
      </ContainerForm>
    </Container>
  );
};

export default DoctorExams;
