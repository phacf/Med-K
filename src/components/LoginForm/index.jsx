import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Link } from "react-router-dom";
import { getPatientThunk } from "../../store/modules/user/thunk";
import { useDispatch } from "react-redux";
import { Content, StyledForm } from "../FormComponents/styles";
import { useHistory } from "react-router-dom";
import Motion from "../Motion";

import logo from "../../assets/logo.png";

const LoginForm = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [userType, setUserType] = useState("");
  const [userId, setUserId] = useState("");
  const schema = yup.object().shape({
    email: yup.string().email("Email inválido").required("Campo requerido"),
    password: yup.string().required("Campo requerido"),
  });

  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema),
  });

  useEffect(() => {
    if (userType === "patient") return history.push(`/menu/patient/${userId}`);
    if (userType === "doctor") return history.push(`/menu/doctor/${userId}`);
  }, [userType]);

  const handleForm = (data) => {
    dispatch(getPatientThunk(data, setUserType, setUserId));
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
                  .isValid({
                    email: "teste@teste.com",
                    password: e.target.value,
                  })
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
    </Motion>
  );
};

export default LoginForm;
