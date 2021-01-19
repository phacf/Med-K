import { medicTypes, userType } from "./actionsType";

const users = {
  patientInfo: [],
  allPatientsInfo: [],
  patientProfile: {},
};

const usersReducer = (state = users, action) => {
  switch (action.type) {
    case medicTypes.GET_PATIENT:
      const { patientInfo } = action;
      users.patientInfo = patientInfo;
      return state;

    case medicTypes.GET_ALL_PATIENTS:
      const { patientsInfo } = action;
      users.allPatientsInfo = [...patientsInfo];
      return state;

    case userType.PATIENT_INFO:
      state.patientProfile = { ...actions.patientProfile };
      return state;
    default:
      return state;
  }
};

export default usersReducer;
