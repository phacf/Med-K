import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Link, useHistory } from "react-router-dom";
import { mask, unMask } from "remask";
import Swal from "sweetalert2";
import { userRegisterThunk } from "../../store/modules/user/thunk";
import { useDispatch } from "react-redux";

import { Content, StyledForm } from "../FormComponents/styles";
import Motion from "../Motion";

const RegisterForm = () => {
  const name = yup
    .string()
    .min(3, "Nome inválido")
    .matches(/^[a-zA-z]/, "Use apenas letras")
    .required("Campo requerido");

  const email = yup
    .string()
    .email("Email inválido")
    .required("Campo requerido");

  const document = yup
    .string()
    .min(11, "Minimo de 11 caracteres")
    .required("Campo requerido");

  const password = yup
    .string()
    .min(8, "Minimo de 8 caracteres")
    .matches(
      /^((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
      "Formato inválido"
    )
    .required("Campo requerido");

  const passwordCheck = yup
    .string()
    .required("Campo requerido")
    .oneOf([yup.ref("password")], "As senhas não combinam");

  const schema = yup.object().shape({
    name,
    email,
    document,
    password,
    passwordCheck,
  });

  const history = useHistory();
  const dispatch = useDispatch();

  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema),
  });

  const handleForm = (data) => {
    userRegisterThunk(data);
    Swal.fire("Cadastro realizado!", "Faça login para continuar.", "success");
    history.push("/");
  };

  const [docValue, setDocValue] = useState("");
  const [docType, setDocType] = useState("CPF");
  const [passwordState, setPasswordState] = useState("");
  const [passwordCheckState, setPasswordCheckState] = useState("");
  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [documentError, setDocumentError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [passwordCheckError, setPasswordCheckError] = useState(false);

  return (
    <Motion>
      <Content>
        <h1>Cadastro</h1>
        <StyledForm
          onSubmit={handleSubmit(handleForm)}
          nameError={nameError}
          emailError={emailError}
          documentError={documentError}
          passwordError={passwordError}
          passwordCheckError={passwordCheckError}
        >
          <div className="radioContent">
            <div className="radioInfo">
              <input
                type="radio"
                name="type"
                value="patient"
                defaultChecked
                className="inputRadio"
                ref={register}
                onClick={() => {
                  setDocType("CPF");
                  setDocValue("");
                }}
              />
              <label className="labelRadio">Paciente</label>
            </div>
            <div className="radioInfo">
              <input
                type="radio"
                name="type"
                value="medic"
                className="inputRadio"
                ref={register}
                onClick={() => {
                  setDocType("CRM");
                  setDocValue("");
                }}
              />
              <label className="labelRadio">Médico</label>
            </div>
          </div>
          <div>
            <input
              name="name"
              required
              ref={register}
              onChange={(e) =>
                name.isValid(e.target.value).then((res) => setNameError(res))
              }
            ></input>
            <label htmlFor="name" className="name">
              <span>Nome</span>
            </label>
          </div>
          <p>{errors.name?.message}</p>
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
              name="document"
              required
              autoComplete="off"
              ref={register}
              value={docValue}
              onChange={(e) => {
                let input = unMask(e.target.value);

                document.isValid(input).then((res) => setDocumentError(res));

                docType === "CPF"
                  ? setDocValue(mask(input, ["999.999.999-99"]))
                  : setDocValue(mask(input, ["999999999/AA"]));
              }}
            ></input>
            <label htmlFor="document" className="document">
              <span>{docType}</span>
            </label>
          </div>
          <p>{errors.document?.message}</p>
          <div>
            <input
              name="password"
              required
              ref={register}
              type="password"
              onChange={(e) => {
                const input = e.target.value;
                password.isValid(input).then((res) => {
                  setPasswordError(res);
                  setPasswordState(input);
                  setPasswordCheckError(passwordCheckState === input);
                });
              }}
            ></input>
            <label htmlFor="password" className="password">
              <span className="labelSpan">Senha</span>
            </label>
          </div>
          <p>{errors.password?.message}</p>
          <div>
            <input
              name="passwordCheck"
              required
              ref={register}
              type="password"
              onChange={(e) => {
                setPasswordCheckError(e.target.value === passwordState);
                setPasswordCheckState(e.target.value);
              }}
            ></input>
            <label htmlFor="passwordCheck" className="passwordCheck">
              <span className="labelSpan">Confirmar Senha</span>
            </label>
          </div>
          <p>{errors.passwordCheck?.message}</p>
          <button type="submit">Cadastrar</button>
        </StyledForm>
        <Link to="/">Login</Link>
      </Content>
    </Motion>
  );
};

export default RegisterForm;
