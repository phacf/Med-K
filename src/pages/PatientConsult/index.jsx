import "antd/dist/antd.css";
import { Empty } from "antd";
import { useState, useEffect } from "react";

import PageTitle from "../../components/PageTitle";
import {
  Container,
  ContainerForm,
  SectionData,
  SectionDescription,
  NewButton,
} from "./styles";
// alterar nome das requisições

const PatientConsult = () => {
  const [user, setUser] = useState({});
  const [consultations, setConsults] = useState(undefined);

  const handleDate = (evt) => {
    setConsults(user.exams[evt.target.id]);
  };

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("userInfo"));
    setUser(user);
  }, []);

  return (
    <Container>
      <PageTitle title={"Consultas"} />
      <ContainerForm>
        <SectionData>
          <h2>Data</h2>
          {!!user.consultations ? (
            user.consultations.map((consults, index) => {
              return (
                <div>
                  <NewButton key={index} onClick={handleDate} id={index}>
                    {consults.data &&
                      consults.data
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
            {consultations ? (
              <div>
                <h3>Consulta: {consultations.type}</h3>
                <h4>
                  <span>
                    {consultations.data &&
                      `Data:
                  ${consultations.data
                    .replace(/[A-Z].*Z/, "")
                    .split("-")
                    .reverse()
                    .join("-")}`}
                  </span>{" "}
                  <span>
                    {consultations.isConfirm
                      ? `Essa consulta foi confirmada`
                      : "Essa consulta NÃO foi confirmada"}
                  </span>
                </h4>
                <div className="description-exams">
                  <p>Descrição: {consultations.description}</p>
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

export default PatientConsult;
