import { GET_PATIENT } from "./actionsType";

export const getPatient = (patient) => ({
  type: GET_PATIENT,
  patient,
});
