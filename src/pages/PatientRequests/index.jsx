import { api } from "../../services/api";
import Slide from "react-reveal/Slide";
import PageTitle from "../../components/PageTitle";
import { StyledPatientsRequestContent, Content } from "./styles";
import { Form, Input, Button, DatePicker, Select } from "antd";
import Swal from "sweetalert2";

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

const PatientRequest = () => {
  const [form] = Form.useForm();

  const onTypeChange = (value) => {
    switch (value) {
      case "Clínico Geral":
        form.setFieldsValue({ type: "Clínico Geral" });
        return;
      case "Pediatra":
        form.setFieldsValue({ type: "Pediatra" });
        return;
      case "Oftalmologista":
        form.setFieldsValue({ type: "Oftalmologista" });
        return;
      case "Dermatologista":
        form.setFieldsValue({ type: "Dermatologista" });
        return;
      case "Dentista":
        form.setFieldsValue({ type: "Dentista" });
        return;
    }
  };

  const tryLogin = (data) => {
    form.resetFields();
    console.log(data);
    const user = JSON.parse(localStorage.getItem("userInfo"));
    data.data = data.data._d.toLocaleString("pt-br");
    data.isConfirm = false;
    console.log(user);
    data.id = !!user.patientRequests.length
      ? user.patientRequests[user.patientRequests.length - 1].id + 1
      : 1;

    let dataProcessed = {};

    if (!!user.patientRequests) {
      dataProcessed = {
        patientRequests: [...user.patientRequests, data],
      };
    } else {
      dataProcessed = {
        patientRequests: [data],
      };
    }

    console.log(dataProcessed);
    api
      .patch(`users/${user.id}`, dataProcessed)
      .then((res) =>
        localStorage.setItem("userInfo", JSON.stringify(res.data))
      );
    Swal.fire(
      "Cansulta agendada",
      "Caso haja algum imprevisto, nos comunique.",
      "success"
    );
  };

  return (
    <StyledPatientsRequestContent>
      <PageTitle title={"Solicitações"} />
      <Slide bottom>
        <Content>
          <h2>Agendamento de Consulta</h2>
          <Form
            style={{ paddingTop: 10 }}
            {...formItemLayout}
            form={form}
            name="register"
            onFinish={tryLogin}
            scrollToFirstError
          >
            <Form.Item
              name="type"
              label="Especialidade"
              rules={[
                {
                  required: true,
                  message: "Por favor, insira a especialidade do seu médico.",
                  whitespace: true,
                },
              ]}
            >
              <Select
                placeholder="Selecione uma especialidade"
                onChange={onTypeChange}
                allowClear
              >
                <Option value="Clínico Geral">Clínico Geral</Option>
                <Option value="Pediatra">Pediatra</Option>
                <Option value="Oftalmologista">Oftalmologista</Option>
                <Option value="Dermatologista">Dermatologista</Option>
                <Option value="Dentista">Dentista</Option>
              </Select>
            </Form.Item>

            <Form.Item
              name="data"
              label="Data"
              rules={[
                {
                  required: true,
                  message: "Por favor, a data.",
                },
              ]}
            >
              <DatePicker showTime />
            </Form.Item>

            <Form.Item
              name="description"
              label="Motivo da solicitação"
              rules={[
                {
                  required: true,
                  message: "Por favor, descreva o que você está sentindo.",
                  whitespace: true,
                },
              ]}
            >
              <Input.TextArea />
            </Form.Item>

            <Form.Item {...tailFormItemLayout}>
              <Button type="primary" htmlType="submit">
                Solicitar
              </Button>
            </Form.Item>
          </Form>
        </Content>
      </Slide>
    </StyledPatientsRequestContent>
  );
};

export default PatientRequest;
