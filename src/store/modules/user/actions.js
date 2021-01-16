import { medicTypes } from "./actionsType";

export const getPatient = (patientInfo) => {
  type: medicTypes.GET_PATIENT;
  patientInfo;
};


