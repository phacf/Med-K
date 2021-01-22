import "antd/dist/antd.css";
import { Empty } from "antd";

import PageTitle from "../../components/PageTitle";

import {
  Container,
  ContainerForm,
  SectionData,
  SectionDescription,
  NewButton,
} from "./styles";

import { useState, useEffect } from "react";

const PatientExam = () => {
  const [user, setUser] = useState({});
  const [exam, setExam] = useState(undefined);

  const handleDate = (evt) => {
    setExam(user.exams[evt.target.id]);
  };

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("userInfo"));
    setUser(user);
  }, []);

  return (
    <Container>
      <PageTitle title={"Exames"} />
      <ContainerForm>
        <SectionData>
          <h2>Data</h2>
          {!!user.exams ? (
            user.exams.map((exam, index) => {
              return (
                <div>
                  <NewButton key={index} onClick={handleDate} id={index}>
                    {exam.date
                      ? exam.date
                          .replace(/[A-Z].*Z/, "")
                          .split("-")
                          .reverse()
                          .join("-")
                      : exam.protocol}
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
                  <span>
                    {exam.date &&
                      `Data:
                  ${exam.date
                    .replace(/[A-Z].*Z/, "")
                    .split("-")
                    .reverse()
                    .join("-")}`}
                  </span>
                  <span>
                    {exam.protocol &&
                      `Nº protocolo:
                  ${exam.protocol}`}
                  </span>
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

export default PatientExam;
