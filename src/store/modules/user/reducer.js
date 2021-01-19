import { medicTypes, userType } from "./actionsType";

const users = {
  patientInfo: [],
  userInfo: {},
  allPatientsInfo: [],
  
};

const usersReducer = (state = users, action) => {
  console.log(state)
  switch (action.type) {
    case medicTypes.GET_PATIENT:
      const { patientInfo } = action;
      users.patientInfo = patientInfo;
      return state;

    case medicTypes.GET_ALL_PATIENTS:
      const { patientsInfo } = action;
      users.allPatientsInfo = [...patientsInfo];
      return state;

    case userType.GET_USER_INFO:
      const { userInfo } = action;
      users.userInfo = { ...userInfo };
      
      return state;

    default:
      return state;
  }
};

export default usersReducer;
