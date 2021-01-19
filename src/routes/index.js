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
          <Route exact path="/">
            <Login />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/doctor/request">
            <DoctorRequest />
          </Route>

          <Route path="/doctor/exams">
            <DoctorExams />
          </Route>

          <Route path="/patient/consult/:id">
            <PatientConsult />
          </Route>

          <Route path="/patient/exam/:id">
            <PatientExam />
          </Route>

          <Route path="/menu/patient/:id">
            <MenuPatient />
          </Route>

          <Route path="/menu/doctor/:id">
            <MenuDoctor />
          </Route>
        </Switch>
      </AnimatePresence>
    </>
  );
};

export default Routes;
