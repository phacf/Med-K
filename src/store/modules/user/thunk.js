import { getPatientInfo } from "./actions";
import { api } from "../../../services/api";

export const getPatientInfoThunk = (data) => (dispatch) => {
  api
    .post("login", data)
    .then((res) => {
      console.log(res);
    })
    .catch((err) => console.log(err));
};
