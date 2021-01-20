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
            <Route exact path="/" component={Login} />
            <Route path="/cadastro" component={Register} />
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
            <Route exact path="/" component={Welcome} />
            <Route path="/exames" component={DoctorExams} />
            <Route path="/solicitacoes" component={DoctorRequest} />
          </Switch>
        </PageContent>
      </>
    );
  }

  if (userInfo.type === "patient") {
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
            <Route path="/exames" component={PatientExam} />
            <Route path="/consultas" component={PatientConsult} />
            <Route path="/solicitacoes" component={PatientRequests} />
            <Route path="/vacinas" component={PatientVaccines} />
            <Route exact path="/">
              <Welcome />
            </Route>
          </Switch>
        </PageContent>
      </>
    );
  }
};

export default Routes;
