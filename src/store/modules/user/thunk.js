import { getPatient, getUser, getAllPatients } from "./actions";
import axios from "axios";
import jwt_decode from "jwt-decode";
import { api } from "../../../services/api";

export const getPatientExamThunk = (cpf) => (dispatch) => {
  api
    .get(`user?q=${cpf}`)
    .then((res) => dispatch(getPatient(res.data)))
    .catch((error) => console.error(error));
};
export const addPatientConsultThunk = (cpf, data) => (dispatch) => {
  api
    .patch(`consultations?q=${cpf}`, data)

    .catch((error) => console.error(error));
};
export const addPatientExamsThunk = (cpf, data) => (dispatch) => {
  api
    .patch(`exams?q=${cpf}`, data)

    .catch((error) => console.error(error));
};
export const getPatientVaccineThunk = (cpf, data) => (dispatch) => {
  api
    .patch(`vaccines?q=${cpf}`, data)

    .catch((error) => console.error(error));
};
export const getAllPatientsThunk = (token) => (dispatch) => {
  axios
    .get("https://api-capstone-medik.herokuapp.com/users?type=patient", {
      headers: { Authorization: `Bearer ${token}` },
    })
    .then((res) => {
      console.log(res);
      dispatch(getAllPatients(res.data));
    })
    .catch((err) => console.log(err));
};

export const userLoginThunk = (data, setError) => (dispatch) => {
  api
    .post("login", data)
    .then((res) => {
      localStorage.setItem("authToken", res.data.accessToken);
      const id = jwt_decode(res.data.accessToken).sub;
      const token = res.data.accessToken;
      setError(false);
      api
        .get(`users/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((res) => {
          localStorage.setItem("userInfo", JSON.stringify(res.data));
          dispatch(getUser(res.data));
          window.location.reload(true);
        })
        .catch((error) => console.error(error));
    })
    .catch((error) => setError(true));
};

export const userRegisterThunk = (data) => {
  api.post("users", data).catch((error) => console.error(error));
};

// Confirmar Agendamento
export const getPatientConfirm = (id, changed) => (dispatch) => {
  api
    .patch(`users/${id}`, {
      consultations: changed,
    })
    .then((res) => {
      console.log(res.data);
      dispatch(getUser(res.data));
    })
    .catch((err) => console.log(err));
};
