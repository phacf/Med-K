import { getPatientInfo } from "./actions";
import { api } from "../../../services/api";
import jwt_decode from "jwt-decode";

// Definir a rota de acordo com o tipo
const selectRoute = (id, setUserType) => {
  const token = JSON.parse(localStorage.getItem("authToken"));
  api
    .get(`users/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((res) => {
      const userType = res.data.type;
      setUserType(userType);
    })
    .catch((err) => console.log(err));
};

export const getPatientThunk = (data, setUserType, setUserId) => (_) => {
  api
    .post("login", { ...data })
    .then((res) => {
      const token = res.data.accessToken;
      const id = jwt_decode(token).sub;
      localStorage.setItem("authToken", JSON.stringify(token));
      selectRoute(id, setUserType);
      setUserId(id);
    })
    .catch((err) => console.log(err));
};

// Consumir Exames
export const getPatientExamThunk = (id) => (dispatch) => {
  api
    .get(`exams/${id}`)
    .then((res) => {
      dispatch(getPatientInfo(res.data));
    })
    .catch((err) => console.log(err));
};

// Consumir Consultas
export const getPatientConsultThunk = (id) => (dispatch) => {
  api
    .get(`consultations/${id}`)
    .then((res) => {
      dispatch(getPatientInfo(res.data));
    })
    .catch((err) => console.log(err));
};

// Consumir Vacinas
export const getPatientVaccineThunk = (id) => (dispatch) => {
  api
    .get(`vaccines${id}`)
    .then((res) => dispatch(getPatientInfo(res.data)))
    .catch((err) => console.log(err));
};

// Confirmar Agendamento
export const getPatientConfirm = (id, changeToTrue) => (dispatch) => {
  api
    .patch(`users/${id}`, {
      consultations: changeToTrue,
    })
    .then((res) => {
      console.log(res.data);
      dispatch(getPatientInfo(res.data));
    })
    .catch((err) => console.log(err));
};
