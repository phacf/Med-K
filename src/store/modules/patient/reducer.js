import { GET_PATIENT } from "./actionsType";

const patientReducer = (state = [], action) => {
  switch (action.type) {
    case GET_PATIENT:
      const { patient } = action;
      return patient;

    default:
      return state;
  }
};
export default patientReducer;
