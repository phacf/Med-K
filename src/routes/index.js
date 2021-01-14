import { Route, Switch } from "react-router-dom";

import Login from "../pages/Login";
import Register from "../pages/Register";

const Routes = () => {
  return (
    <>
      <Switch>
        <Route exact path="/register">
          <Register />
        </Route>
        <Route path="/">
          <Login />
        </Route>
      </Switch>
    </>
  );
};

export default Routes;
