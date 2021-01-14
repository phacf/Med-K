import { doctor, patient } from "./actionsType";

const users = {
  doctor: {},
  patient: {
    vaccines: {},
    exams: {},
    consultations: {},
  },
};
const usersReducer = (state = users, action) => {
  switch (action.type) {
    case doctor.GET_PATIENT:
      const { patient } = action;
      state.patient = [...state.patient, patient];
      return state.patient;

    case patient.GET_VACCINES:
      const { vaccines } = action;
      state.patient = [...state.patient.vaccines, vaccines];
      return state.patient;

    default:
      return state;
  }
};
export default usersReducer;
