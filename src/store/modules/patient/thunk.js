import axios from "axios";
import { getPatient } from "./actions";

export const getPatientThunk = () => (dispatch) => {
  axios
    .get("url/patient/id ou name ou qq coisa")
    .then((res) => dispatch(getPatient(res.data)))
    .catch((error) => console.error(error));
};
