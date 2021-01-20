import { Route, Switch } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

import Header from "../components/Header";
import PageContent from "../components/PageContent";

import Login from "../pages/Login";
import Register from "../pages/Register";
import PatientConsult from "../pages/PatientConsult";
import PatientExam from "../pages/PatientExam";
import PatientRequests from "../pages/PatientRequests";
import PatientVaccines from "../pages/PatientVaccines";
import DoctorExams from "../pages/DoctorExams";
import DoctorRequest from "../pages/DoctorRequest";
import Welcome from "../pages/Welcome";

const Routes = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const token = window.localStorage.getItem("authToken");
  const userInfo = JSON.parse(localStorage.getItem("userInfo"));

  useEffect(() => {
    if (token) {
      setIsAuthenticated(token);
    }
  }, [token]);

  if (!isAuthenticated) {
    return (
      <>
        <AnimatePresence>
          <Switch>
            <Route exact path="/cadastro">
              <Register />
            </Route>
            <Route path="/">
              <Login />
            </Route>
          </Switch>
        </AnimatePresence>
      </>
    );
  }

  if (userInfo.type === "medic") {
    return (
      <>
        <Header
          menuItems={["Exames", "Solicitações"]}
          paths={["/exames", "/solicitacoes"]}
        />
        <PageContent>
          <Switch>
            <Route exact path="/exames">
              <DoctorExams />
            </Route>
            <Route exact path="/solicitacoes">
              <DoctorRequest />
            </Route>
            <Route path="/">
              <Welcome />
            </Route>
          </Switch>
        </PageContent>
      </>
    );
  }

  if (isAuthenticated && userInfo.type === "patient") {
    return (
      <>
        <Header
          menuItems={[
            "Exames",
            "Consultas",
            "Solicitações",
            "Vacinas",
            "Informações",
          ]}
          paths={["/exames", "/consultas", "/solicitacoes", "/vacinas"]}
        />
        <PageContent>
          <Switch>
            <Route exact path="/exames">
              <PatientExam />
            </Route>
            <Route exact path="/consultas">
              <PatientConsult />
            </Route>
            <Route exact path="/solicitacoes">
              <PatientRequests />
            </Route>
            <Route exact path="/vacinas">
              <PatientVaccines />
            </Route>
            <Route path="/">
              <Welcome />
            </Route>
          </Switch>
        </PageContent>
      </>
    );
  }
};

export default Routes;
