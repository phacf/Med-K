import { getPatient, getUser, getAllPatients } from "./actions";
import jwt_decode from "jwt-decode";
import { api } from "../../../services/api";

export const getPatientExamThunk = (cpf) => (dispatch) => {
  api
    .get(`user?q=${cpf}`)
    .then((res) => dispatch(getPatient(res.data)))
    .catch((error) => console.error(error));
};
export const addPatientConsultThunk = (cpf) => (dispatch) => {
  api
    .patch(`consultations?q=${cpf}`)

    .catch((error) => console.error(error));
};
export const addPatientExamsThunk = (cpf) => (dispatch) => {
  api
    .patch(`exams?q=${cpf}`)

    .catch((error) => console.error(error));
};
export const getPatientVaccineThunk = (cpf) => (dispatch) => {
  api
    .patch(`vaccines?q=${cpf}`)

    .catch((error) => console.error(error));
};
export const getAllPatientsThunk = () => (dispatch) => {
  api
    .get(`users?type=:patient`)
    .then((res) => dispatch(getAllPatients(res.data)))
    .catch((error) => console.error(error));
};

export const userLoginThunk = (data) => (dispatch) => {
  console.log(data);
  api
    .post("login", data)
    .then((res) => {
      localStorage.setItem("authToken", JSON.stringify(res.data));
      const id = jwt_decode(res.data.accessToken).sub;
      api
        .get(`users/${id}`)
        .then((res) => {
          console.log(res.data);
          dispatch(getUser(res.data));
        })
        .catch((error) => console.error(error));
    })
    .catch((error) => console.error(error));
};

export const userRegisterThunk = (data) => {
  api.post("users", data).catch((error) => console.error(error));
};
