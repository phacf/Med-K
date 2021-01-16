import { medicTypes } from "./actionsType";

const users = {
  patientInfo: [],
};

const usersReducer = (state = users, action) => {
  switch (action.type) {
    case medicTypes.GET_PATIENT:
      const { patientInfo } = action;
      users.patientInfo = patientInfo;
      return state;

    default:
      return state;
  }
};
export default usersReducer;
