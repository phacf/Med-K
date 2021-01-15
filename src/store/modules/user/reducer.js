import { userType } from "./actionsType";

const user = {
  patientProfile: {},
};

const userReducer = (state = user, actions) => {
  switch (actions.type) {
    case userType.PATIENT_INFO:
      state.patientProfile = { ...actions.patientProfile };
      return state;
    default:
      return state;
  }
};

export default userReducer;
