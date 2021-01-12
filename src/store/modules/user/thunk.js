import axios from "axios";
import { getPatient } from "./actions";

export const getPatientThunk = () => (dispatch) => {
  axios
    .get("url/patient/id ou name ou qq coisa")
    .then((res) => dispatch(getPatient(res.data)))
    .catch((error) => console.error(error));
};

export const doctorLoginThunk = () => (dispatch) => {
  axios
  .post("endereço/login","email e senha")
  .then((res) => localStorage.setItem(JSON.stringify(res.data),"authToken"))

}
