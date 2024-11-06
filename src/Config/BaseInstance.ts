import axios from "axios";
import { BaseUrl } from "./ApiConfig";

let token = "";

export const BaseInstance = axios.create({
  baseURL: BaseUrl,
  headers: {
    Hello: "world",
    ...(token.length > 0 && { Authorization: `Bearer ${token}` }),
  },
});
