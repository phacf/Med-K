import { userType } from "./actionsType";

export const getPatientInfo = (patientProfile) => ({
  type: userType.PATIENT_INFO,
  patientProfile,
});
