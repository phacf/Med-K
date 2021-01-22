import { useState, useEffect } from "react";
import axios from "axios";

import "antd/dist/antd.css";
import { Radio } from "antd";

import FormConsult from "../../components/FormConsult";
import FormExam from "../../components/FormExam";
import SetCardHistory from "../../components/SetCardHistory";
import SelectPatients from "../../components/SelectPatients";
import PageTitle from "../../components/PageTitle";

import {
  Container,
  ContainerForm,
  SectionForm,
  TitlePage,
  NewSelect,
} from "./styles";

const DoctorRequest = () => {
  const [history, setHistory] = useState("");
  const [patients, setPatient] = useState([]);
  const [valueRadio, setValueRadio] = useState(0);

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
      <PageTitle title={"Solicitações"} />
      <NewSelect>
        <h2>Paciente:</h2>
        <SelectPatients setHistory={setHistory} patients={patients} />
      </NewSelect>
      <ContainerForm>
        <SectionForm scroll>
          <h2>Histórico de consultas</h2>
          <SetCardHistory history={history} />
        </SectionForm>
        <SectionForm>
          <h2>Solicitar consultas</h2>
          <Radio.Group
            defaultValue="0"
            onChange={(evt) => setValueRadio(evt.target.value)}
            value={valueRadio}
          >
            <Radio value={0}>Exame</Radio>
            <Radio value={1}>Consultas</Radio>
          </Radio.Group>
          {!!valueRadio ? (
            <FormConsult setHistory={setHistory} history={history} />
          ) : (
            <FormExam setHistory={setHistory} history={history} />
          )}
        </SectionForm>
      </ContainerForm>
    </Container>
  );
};

export default DoctorRequest;
