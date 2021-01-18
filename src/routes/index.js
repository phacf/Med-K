import { Route, Switch } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import Login from "../pages/Login";
import Register from "../pages/Register";
import MenuDoctor from "../pages/DoctorMenu";
import MenuPatient from "../pages/PatientMenu";
import PatientConsult from "../pages/PatientConsult";
import PatientExam from "../pages/PatientExam";
import DoctorExams from "../pages/DoctorExams";
import DoctorRequest from "../pages/DoctorRequest";

const Routes = () => {
  return (
    <>
      <AnimatePresence>
        <Switch>
          <Route exact path="/register">
            <Register />
          </Route>
          <Route exact path="/">
            <Login />
          </Route>

          <Route exact path="/doctor/request">
            <DoctorRequest />
          </Route>

          <Route exact path="/doctor/exams">
            <DoctorExams />
          </Route>

          <Route exact path="/patient/consult">
            <PatientConsult />
          </Route>

          <Route exact path="/patient/exam">
            <PatientExam />
          </Route>

          <Route exact path="/menu/patient">
            <MenuPatient />
          </Route>

          <Route exact path="/menu/doctor">
            <MenuDoctor />
          </Route>
        </Switch>
      </AnimatePresence>
    </>
  );
};

export default Routes;
