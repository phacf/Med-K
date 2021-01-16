import { api } from "../../../services/api";
import { getPatient, getVaccines, getExams, getConsultations } from "./actions";
import jwt_decode from "jwt-decode";

import { getPatient } from "./actions";
import { api } from "../../../services/api";

export const getPatientExamThunk = (cpf) => (diapatch) => {
  api
    .get(`user?q=${cpf}`)
    .then((res) => dispatchEvent(getPatient(res.data)))
    .catch((error) => console.error(error));
};
export const addPatientConsultThunk = (cpf) => (diapatch) => {
  api
    .patch(`consultations?q=${cpf}`)

    .catch((error) => console.error(error));
};
export const addPatientExamsThunk = (cpf) => (diapatch) => {
  api
    .patch(`exams?q=${cpf}`)

    .catch((error) => console.error(error));
};
export const getPatientVaccineThunk = (cpf) => (diapatch) => {
  api.patch(`vaccines?q=${cpf}`)
  
  .catch((error)=>console.error(error))
};
