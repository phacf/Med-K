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

const selectRoute = (id, token, setUserType, dispatch) => {
  api
    .get(`users/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((res) => {
      const userType = res.data.type;
      setUserType(userType);
      console.log(res.data);
      dispatch(getPatientInfo(res.data));
    })
    .catch((err) => console.log(err));
};

export const getPatientInfoThunk = (data, setUserType, setUserId) => (
  dispatch,
  _
) => {
  api
    .post("login", { ...data })
    .then((res) => {
      const token = res.data.accessToken;
      const id = jwt_decode(token).sub;
      localStorage.setItem("authToken", JSON.stringify(token));
      selectRoute(id, token, setUserType, dispatch);
      setUserId(id);
    })
    .catch((err) => console.log(err));
};
