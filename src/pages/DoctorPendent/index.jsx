import axios from "axios";
import { useEffect, useState } from "react";
import { Descriptions, Button, Switch } from "antd";
import ListCard from "../../components/ListCard";

const DoctorPendent = () => {
  const [patients, setPatients] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem("authToken");

    axios
      .get("https://api-capstone-medik.herokuapp.com/users?type=patient", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        console.log(res.data);
        const usersPendent = [];
        res.data.map((patient) => {
          if (patient.patientRequest) {
            usersPendent.push(patient);
          }
        });
        setPatients(usersPendent);

        console.log(usersPendent);
      });
  }, []);

  function onChange(checked) {
    console.log(`switch to ${checked}`);
  }

  return (
    <div>
      {patients &&
        patients.map((patient, index) => (
          <ListCard key={index} patient={patient} />
        ))}
    </div>
  );
};

export default DoctorPendent;