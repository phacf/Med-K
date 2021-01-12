import { api } from "../../../services/api";
import { getPatient,getVaccines,getExams,getConsultations } from "./actions";
import jwt_decode from "jwt-decode";

//login decodifica token e guarda tudo no local
export const userLoginThunk = (userInfo, setError) => (dispatch) => {
  api
    .post(`/login`, { userInfo })
    .then((res) => {
      localStorage.setItem("authToken", JSON.stringify(res.data));
      localStorage.setItem("user",JSON.stringify(jwt_decode(res.data)))
    })
    .catch((error) => {
      setError(true);
      console.error(error);
    });
};

//medico busca paciente
export const GetPatientThunk = (cpf) => (dispatch) => {
  api
    .get(`/users?q=${cpf}`)
    .then((res) => {
      dispatch(getPatient(res.data));
    })
    .catch((error) => console.error(error));
};

//get de vacina
export const getVacineThunk = (cpf) => (dispatch) => {
  api.get(`vaccines?q=${cpf}`)
  .then((res)=> getVaccines(res.data))
  .catch((error) => console.error(error));
};

//get de consulta
export const getConsultationsThunk = (cpf) => (dispatch) => {
  api.get(`consultations?q=${cpf}`)
  .catch((error) => console.error(error));
};
//get de exame
export const getExamsThunk = (cpf) => (dispatch) => {
  api.get(`exams?q=${cpf}`)
  .catch((error) => console.error(error));
};
