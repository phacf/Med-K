import { useDispatch } from "react-redux";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

const PatientRequest = () => {
  const schema = yup.object().shape({
    text: yup.string(),
  });

  const { register, handleSubmit } = useForm();
  //resolver: yupResolver(schema),
  const dispatch = useDispatch();

  const onSubmit = (data) => {
    dispatch(""(data.text));
  };

  const divButton = {
    height: "6vh",
    width: "23vw",
    boxShadow: "4px 4px 16px 8px rgba(0, 0, 0, 0.25)",
    margin: "20px",
    borderRadius: "10px",
  };

  const divStyle = {
    width: "90vw",
    backgroundColor: "white",
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "center",
    color: "black",
    borderRadius: "10px",
    boxShadow: "4px 4px 16px 8px rgba(0, 0, 0, 0.25)",
  };

  return (
    <div>
      <form style={divStyle} onSubmit={handleSubmit(onSubmit)}>
        <div>
          <h1>Solicitações</h1>
        </div>
        <button style={divButton} type="submit">
          Solicitar
        </button>
        <label for="exam">Escolha</label>
        <select
          type="text"
          name="tipo"
          ref={register({ required: true, maxLength: 30 })}
        >
          <option value="">Escolha</option>
          <option value="Exame">Exame</option>
          <option value="Consulta">Consulta</option>
        </select>

        <textarea
          type="text"
          name="text"
          placeholder="Texto"
          rows="30"
          cols="100"
          ref={register({ required: true })}
        >
          {" "}
        </textarea>
      </form>
      <button style={divButton} type="submit">
        Voltar
      </button>
    </div>
  );
};

export default PatientRequest;
