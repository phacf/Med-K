import { useState, useEffect } from "react";
import axios from "axios";
import "antd/dist/antd.css";

import FormConsult from "../../components/FormConsult";
import SetCardHistory from "../../components/SetCardHistory";
import SelectPatients from "../../components/SelectPatients";

import { Container, ContainerForm, SectionForm } from "./styles";

const DoctorRequest = () => {
  const [history, setHistory] = useState("");
  const [patients, setPatient] = useState([]);

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
      <div>
        <h1>Solicitações</h1>
      </div>
      <section>
        <h2>Selecionar paciente:</h2>
        <SelectPatients setHistory={setHistory} patients={patients} />
      </section>
      <ContainerForm>
        <SectionForm scroll>
          <h2>Histórico</h2>
          <SetCardHistory history={history} />
        </SectionForm>
        <SectionForm>
          <h2>Solicitar consultas</h2>
          <FormConsult setHistory={setHistory} history={history} />
        </SectionForm>
      </ContainerForm>
    </Container>
  );
};

export default DoctorRequest;
