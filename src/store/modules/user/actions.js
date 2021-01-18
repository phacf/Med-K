import { medicTypes } from "./actionsType";
import { userType } from "./actionsType";

export const getPatient = (patientInfo) => {
  type: medicTypes.GET_PATIENT, patientInfo;
};

export const getAllPatients = (patientsInfo) => {
  type: medicTypes.GET_ALL_PATIENTS, patientsInfo;
};

export const getPatientInfo = (patientProfile) => ({
  type: userType.PATIENT_INFO,
  patientProfile,
});
