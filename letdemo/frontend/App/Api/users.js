
import apiClient from "./ApiClient";
const register = (userInfo) => apiClient.post("/users", userInfo);

export default { register };
