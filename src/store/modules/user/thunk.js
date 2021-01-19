import { getPatient, getPatientInfo, getAllPatients } from "./actions";
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
export const getAllPatientsThunk = () => (dispatch) => {
  api
    .get(`users?type=:patient`)
    .then((res) => dispatch(getAllPatients(res.data)))
    .catch((error) => console.error(error));
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
