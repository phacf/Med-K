import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import patientReducer from "./modules/patient/reducer";

const reducers = combineReducers({
  patient: patientReducer,
});

const store = createStore(reducers, applyMiddleware(thunk));
export default store;
