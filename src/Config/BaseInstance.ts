import axios from "axios";
import { BaseUrl } from "./ApiConfig";

let token = localStorage.getItem("token");

export const BaseInstance = axios.create({
  baseURL: BaseUrl,
  headers: {
    ...(token && token.length > 0 && { Authorization: `Bearer ${token}` }),
  },
});

BaseInstance.interceptors.response.use(
  (response) => response, // Return the response if it's successful
  (error) => {
    if (error.response && error.response.status === 511) {
      window.location.replace("/login");
    }
    return Promise.reject(error); // Reject the promise for other errors
  }
);
