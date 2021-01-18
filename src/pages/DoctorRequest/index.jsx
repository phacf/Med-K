import { useState, useEffect } from "react";
import axios from "axios";
import { Select } from "antd";
import "antd/dist/antd.css";
import { Form, Input, Button, DatePicker, message } from "antd";

const { Option } = Select;

const formItemLayout = {
  labelCol: {
    xs: {
      span: 14,
    },
    sm: {
      span: 8,
    },
  },
  wrapperCol: {
    xs: {
      span: 14,
    },
    sm: {
      span: 10,
    },
  },
};
const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 8,
    },
  },
};

const success = () => {
  message.success("Consulta cadastrada com sucesso!");
};

const error = (err) => {
  message.error("Campos inválidos. ");
};

const DoctorRequest = () => {
  const [patients, setPatient] = useState([]);
  const [history, setHistory] = useState("");
  const token = localStorage.getItem("authToken");
  const [form] = Form.useForm();

  const selectPatient = (
    <>
      {patients.map((patient, index) => (
        <Option key={index} value={patient.id}>
          {patient.email}
        </Option>
      ))}
    </>
  );

  const tryLogin = (data) => {
    let dataProcessed = {};
    data.date = data.date._d;
    data.isConfirm = false;
    if (!!history.consultations) {
      const consultatiosPrev = history.consultations;
      dataProcessed = {
        consultations: [...consultatiosPrev, data],
      };
    } else {
      dataProcessed = {
        consultations: [data],
      };
    }
    console.log(dataProcessed);

    axios
      .patch(
        `https://api-capstone-medik.herokuapp.com/consultations/${history.id}`,
        dataProcessed,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      )
      .then((res) => {
        console.log(res.data);
        setHistory(res.data);
        success();
      })
      .catch((err) => error());
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

  const onChange = (value) => {
    patients.map((patient) => {
      if (patient.id === value) {
        setHistory(patient);
      }
    });
  };

  return (
    <div>
      <div>
        <h1>Solicitação</h1>
      </div>
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
        <h2>Histórico</h2>
        <div>
          {history.consultations ? (
            JSON.stringify(history.consultations)
          ) : (
            <p>Sem histórico</p>
          )}
        </div>
      </section>
      <section>
        <h2>Solicitar consultas</h2>
        <Form
          style={{ paddingTop: 40 }}
          {...formItemLayout}
          form={form}
          name="register"
          onFinish={tryLogin}
          scrollToFirstError
        >
          <Form.Item
            name="type"
            label="Nome do procedimento"
            rules={[
              {
                required: true,
                message: "Por favor, insira o nome do procedimento.",
                whitespace: true,
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            name="date"
            label="Data"
            rules={[
              {
                required: true,
                message: "Por favor, insira uma data para o procedimento.",
              },
            ]}
          >
            <DatePicker showTime />
          </Form.Item>

          <Form.Item
            name="description"
            label="Descrição"
            rules={[
              {
                required: true,
                message: "Por favor, insira descrição do processo.",
                whitespace: true,
              },
            ]}
          >
            <Input.TextArea />
          </Form.Item>

          <Form.Item {...tailFormItemLayout}>
            <Button
              type="primary"
              htmlType="submit"
              disabled={history.id ? false : true}
            >
              Login
            </Button>
          </Form.Item>
        </Form>
      </section>
    </div>
  );
};

export default DoctorRequest;
