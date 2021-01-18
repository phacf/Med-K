import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Link } from "react-router-dom";

import { Content, StyledForm } from "../FormComponents/styles";

import logo from "../../assets/logo.png";

const LoginForm = () => {
  const schema = yup.object().shape({
    email: yup.string().email("Email inválido").required("Campo requerido"),
    password: yup.string().min(6, "Senha inválida").required("Campo requerido"),
  });

  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema),
  });

  const handleForm = (data) => {
    console.log(data);
  };

  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  return (
    <Content>
      <img src={logo} alt="Logo Med-K" />
      <StyledForm
        onSubmit={handleSubmit(handleForm)}
        emailError={emailError}
        passwordError={passwordError}
      >
        <div>
          <input
            name="email"
            required
            ref={register}
            onChange={(e) =>
              schema
                .isValid({ email: e.target.value, password: "12345678" })
                .then((valid) => setEmailError(valid))
            }
          ></input>
          <label htmlFor="email" className="email">
            <span>Email</span>
          </label>
        </div>
        <p>{errors.email?.message}</p>
        <div>
          <input
            name="password"
            required
            ref={register}
            type="password"
            onChange={(e) =>
              schema
                .isValid({ email: "teste@teste.com", password: e.target.value })
                .then((valid) => setPasswordError(valid))
            }
          ></input>
          <label htmlFor="password" className="password">
            <span className="labelSpan">Senha</span>
          </label>
        </div>
        <p>{errors.password?.message}</p>
        <button type="submit">Entrar</button>
      </StyledForm>
      <Link to="/register">Cadastre-se</Link>
    </Content>
  );
};

export default LoginForm;
