import apiClient from "./ApiClient";
const login = (email, password) =>apiClient.post("/auth", { email, password });

export default {
  login,
};