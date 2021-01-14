import { userType } from "./actionsType";

const user = {
  patientProfile: {},
};

const userReducer = (state = user, actions) => {
  console.log(actions);
  switch (actions.type) {
    case userType.PATIENT_INFO:
      state.patientProfile = { ...actions.patientProfile };
      return state.patientProfile;
    default:
      return state;
  }
};

export default userReducer;
