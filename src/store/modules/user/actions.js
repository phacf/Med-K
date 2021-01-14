import { doctor, patient } from "./actionsType";

export const getPatient = (patient) => ({
  type: doctor.GET_PATIENT,
  patient,
});

export const getVaccines = (vaccines) => ({
  type: patient.GET_VACCINES,
  vaccines,
});

export const getExams = (exams) => ({
  type: patient.GET_EXAMS,
  exams,
});

export const getConsultations = (consultations) => ({
  type: patient.GET_CONSULTATION,
  consultations,
});
