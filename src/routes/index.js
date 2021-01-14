import { Route, Switch } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import Login from "../pages/Login";
import Register from "../pages/Register";

const Routes = () => {
  return (
    <>
      <AnimatePresence>
        <Switch>
          <Route exact path="/register">
            <Register />
          </Route>
          <Route path="/">
            <Login />
          </Route>
        </Switch>
      </AnimatePresence>
    </>
  );
};

export default Routes;
