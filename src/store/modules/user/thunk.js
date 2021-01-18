import { api } from "../../../services/api";
import { getPatient, getVaccines, getExams, getConsultations,getAllPatients } from "./actions";
import jwt_decode from "jwt-decode";

import { getPatient } from "./actions";
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
  api.patch(`vaccines?q=${cpf}`)
  
  .catch((error)=>console.error(error))
};
export const getAllPatientsThunk = () =>(dispatch)=> {
  api
  .get(`users?type=:patient`)
  .then((res)=> dispatch(getAllPatients(res.data)))
  .catch((error)=>console.error(error))
}
