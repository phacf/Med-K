import { getPatientInfo } from "./actions";
import { api } from "../../../services/api";
import jwt_decode from "jwt-decode";

const selectRoute = (id, token, setUserType, dispatch) => {
  api
    .get(`users/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((res) => {
      const userType = res.data.type;
      setUserType(userType);
      console.log(res.data);
      dispatch(getPatientInfo(res.data));
    })
    .catch((err) => console.log(err));
};

export const getPatientInfoThunk = (data, setUserType, setUserId) => (
  dispatch,
  _
) => {
  api
    .post("login", { ...data })
    .then((res) => {
      const token = res.data.accessToken;
      const id = jwt_decode(token).sub;
      localStorage.setItem("authToken", JSON.stringify(token));
      selectRoute(id, token, setUserType, dispatch);
      setUserId(id);
    })
    .catch((err) => console.log(err));
};
