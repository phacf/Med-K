import { Select } from "antd";

const { Option } = Select;

const SelectPatients = ({ setHistory, patients, setExam }) => {
  const selectPatient = (
    <>
      {patients.map((patient, index) => (
        <Option key={index} value={patient.id}>
          {patient.name || patient.email}
        </Option>
      ))}
    </>
  );

  const onChange = (value) => {
    patients.map((patient) => {
      if (patient.id === value) {
        setHistory(patient);
        if (setExam) {
          setExam(undefined);
        }
      }
    });
  };

  return (
    <Select
      showSearch
      style={{ width: 300 }}
      placeholder="Selecione um paciente"
      optionFilterProp="children"
      onChange={onChange}
      filterOption={(input, option) =>
        option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
      }
    >
      {!!patients.length && selectPatient}
    </Select>
  );
};
export default SelectPatients;
