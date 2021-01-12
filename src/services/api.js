import axios from "axios";

const token = localStorage.getItem(JSON.parse("authToken"));

export const api = axios.create({
  baseURL: "https://api-capstone-medik.herokuapp.com/",
  headers: { Authorization: `Bearer ${token}` },
});
