import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Link } from "react-router-dom";

import { Content, StyledForm } from "../FormComponents/styles";
import Motion from "../Motion";

import logo from "../../assets/logo.png";

const LoginForm = () => {
  const email = yup
    .string()
    .email("Email inválido")
    .required("Campo requerido");

  const password = yup.string().required("Campo requerido");
  const schema = yup.object().shape({
    email,
    password,
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
    <Motion>
      <Content>
        <img src={logo} alt="Logo Med-K" />
        <h1>Login</h1>
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
                email.isValid(e.target.value).then((res) => setEmailError(res))
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
                password
                  .isValid(e.target.value)
                  .then((res) => setPasswordError(res))
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
    </Motion>
  );
};

export default LoginForm;
