import { api } from "../../services/api";
import Slide from "react-reveal/Slide";
import PageTitle from "../../components/PageTitle";
import { StyledPatientsRequestContent, Content } from "./styles";
import { Form, Input, Button, DatePicker, message } from "antd";

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
  const user = JSON.parse(localStorage.getItem("userInfo"));

  const [form] = Form.useForm();
  const tryLogin = (data) => {
    data.data = data.data._d.toLocaleString("pt-br");
    console.log(data);
    api.patch(`user/${user.id}`, {
      ExamsRequests: data,
    });
  };

  return (
    <StyledPatientsRequestContent>
      <PageTitle title={"Solicitações"} />
      <Slide bottom>
        <Content>
          <h2>Solicitação de Exame</h2>
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
              label="Exame"
              rules={[
                {
                  required: true,
                  message: "Por favor, insira o nome do exame.",
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
                  message: "Por favor, insira a data do exame.",
                },
              ]}
            >
              <DatePicker showTime />
            </Form.Item>

            <Form.Item
              name="description"
              label="Situação"
              rules={[
                {
                  required: true,
                  message: "Por favor, insira resultado do exame.",
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
