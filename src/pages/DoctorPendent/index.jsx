import axios from "axios";
import { useEffect, useState } from "react";
import { Empty } from "antd";
import Slide from "react-reveal/Slide";

import { Container, CardsContainer } from "./styles";

import ListCard from "../../components/ListCard";
import PageTitle from "../../components/PageTitle";

const DoctorPendent = () => {
  const [patients, setPatients] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem("authToken");

    axios
      .get("https://api-capstone-medik.herokuapp.com/users?type=patient", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        const usersPendent = [];
        res.data.map((patient) => {
          if (patient.patientRequests) {
            if (patient.patientRequests.length >= 1) {
              usersPendent.push(patient);
            }
          }
        });
        console.log(usersPendent);
        setPatients(usersPendent);
      });
  }, []);

  return (
    <Container>
      <PageTitle title="Pendências" />
      <Slide bottom>
        {!!patients.length ? (
          patients.maps((patient, index) => (
            <CardsContainer>
              <ListCard key={index} patient={patient} />
            </CardsContainer>
          ))
        ) : (
          <CardsContainer empty>
            <Empty description="Nenhuma pendência" />
          </CardsContainer>
        )}
      </Slide>
    </Container>
  );
};

export default DoctorPendent;
