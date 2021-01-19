import { Route, Switch } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router-dom";

import Header from "../components/Header";
import PageContent from "../components/PageContent";

import Login from "../pages/Login";
import Register from "../pages/Register";
import PatientConsult from "../pages/PatientConsult";
import PatientExam from "../pages/PatientExam";
import DoctorExams from "../pages/DoctorExams";
import DoctorRequest from "../pages/DoctorRequest";
import Welcome from "../pages/Welcome";

const Routes = () => {
  // const [isAuthenticated, setAuthentication] = useState(false);
  // const history = useHistory();
  // const location = useLocation();

  // useEffect(() => {
  //   const token = window.localStorage.getItem("authToken");
  //   if (token) {
  //     setAuthentication(true);
  //     if (location.pathname === "/") {
  //       history.push("/");
  //     }
  //   }
  // }, [location.pathname, history]);

  // if (isAuthenticated === false) {
  //   return (
  //     <>
  //       <AnimatePresence>
  //         <Switch>
  //           <Route exact path="/cadastro">
  //             <Register />
  //           </Route>
  //           <Route path="/">
  //             <Login />
  //           </Route>
  //         </Switch>
  //       </AnimatePresence>
  //     </>
  //   );
  // }

  return (
    <>
      <AnimatePresence>
        <Header menuItems={["Exames", "Consultas", "Pacientes"]} paths={[]} />
        <PageContent>
          <Switch>
            <Route exact path="/medico/solicitacoes">
              <DoctorRequest />
            </Route>
            <Route exact path="/medico/exames">
              <DoctorExams />
            </Route>
            <Route exact path="/paciente/consultas">
              <PatientConsult />
            </Route>
            <Route exact path="/paciente/exames">
              <PatientExam />
            </Route>
            <Route path="/">
              <Welcome />
            </Route>
          </Switch>
        </PageContent>
      </AnimatePresence>
    </>
  );
};

export default Routes;
