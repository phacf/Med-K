import axios from "axios";
import { useEffect, useState } from "react";
import ListCard from "../../components/ListCard";
import { Empty } from "antd";

import { CardsContainer } from "./styles";

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

  return !!patients.length ? (
    patients.map((patient, index) => (
      <CardsContainer>
        <ListCard key={index} patient={patient} />
      </CardsContainer>
    ))
  ) : (
    <CardsContainer empty>
      <Empty description="Nenhuma pendência" />{" "}
    </CardsContainer>
  );
};

export default DoctorPendent;
