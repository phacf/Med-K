import axios from "axios";
import "antd/dist/antd.css";
import { useState, useEffect } from "react";
import { Select } from "antd";


const { Option } = Select;

const DoctorExams = () => {
  const [patients, setPatient] = useState([]);
  const [history, setHistory] = useState("");
  const [exam, setExam] = useState(undefined);
  const token = localStorage.getItem("authToken");

  const selectPatient = (
    <>
      {patients.map((patient, index) => (
        <Option key={index} value={patient.id}>
          {patient.email}
        </Option>
      ))}
    </>
  );

  const onChange = (value) => {
    patients.map((patient) => {
      if (patient.id === value) {
        setHistory(patient);
      }
    });
  };

  const handleDate = (evt) => {
    console.log(history.exams[evt.target.id]);
    setExam(history.exams[evt.target.id]);
  };

  useEffect(() => {
    axios
      .get("https://api-capstone-medik.herokuapp.com/users", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        const arrayPatient = [];
        res.data.map((objClient) => {
          if (objClient.type === "patient") {
            arrayPatient.push(objClient);
          }
        });
        setPatient(arrayPatient);
      });
  }, []);

  return (
    <div>
      <div>Exames</div>
      <section>
        <Select
          showSearch
          style={{ width: 200 }}
          placeholder="Selecione um paciente"
          optionFilterProp="children"
          onChange={onChange}
          filterOption={(input, option) =>
            option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
          }
        >
          {!!patients.length && selectPatient}
        </Select>
      </section>
      <section>
        {!!history.exams ? (
          history.exams.map((exam, index) => {
            return (
              <div>
                <button
                  style={{ background: "inherit", border: "none", margin: 2 }}
                  key={index}
                  onClick={handleDate}
                  id={index}
                >
                  {exam.data
                    .replace(/[A-Z].*Z/, "")
                    .split("-")
                    .reverse()
                    .join("-")}
                </button>
              </div>
            );
          })
        ) : (
          <p>Sem exames</p>
        )}
      </section>
      <section>
        <div>
          {exam ? (
            <div>
              <h2>{exam.type}</h2>
              <h3>
                {exam.data
                  .replace(/[A-Z].*Z/, "")
                  .split("-")
                  .reverse()
                  .join("-")}
              </h3>
              <p>{exam.description}</p>
            </div>
          ) : (
            <p>Sem dados</p>
          )}
        </div>
      </section>
    </div>
  );
};

export default DoctorExams;
