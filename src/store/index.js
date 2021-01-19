import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import usersReducer from "./modules/user/reducer";

const reducers = combineReducers({
  user: usersReducer,
});

const store = createStore(reducers, applyMiddleware(thunk));
export default store;
