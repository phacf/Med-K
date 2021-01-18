import { medicTypes } from "./actionsType";

export const getPatient = (patientInfo) => {
  type: medicTypes.GET_PATIENT, patientInfo;
};
export const getAllPatients = (patientsInfo) => {
  type: medicTypes.GET_ALL_PATIENTS, patientsInfo;
};
