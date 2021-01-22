import { Form, Input, Button, DatePicker, message } from "antd";
import axios from "axios";

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

const FormConsult = ({ setHistory, history }) => {
  const [form] = Form.useForm();

  const tryLogin = (data) => {
    form.resetFields();

    let dataProcessed = {};
    data.data = data.data._d.toLocaleString("pt-br");
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

    const token = localStorage.getItem("authToken");

    axios
      .patch(
        `https://api-capstone-medik.herokuapp.com/consultations/${history.id}`,
        dataProcessed,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      )
      .then((res) => {
        setHistory(res.data);
        success();
      })
      .catch((err) => error());
  };

  return (
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
        label="Procedimento"
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
        name="data"
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
          Registrar
        </Button>
      </Form.Item>
    </Form>
  );
};

export default FormConsult;
