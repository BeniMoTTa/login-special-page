import axios from "axios";

export const api = axios.create({
  baseURL: "api-restaurant-special.vercel.app",
  timeout: 5000,
});
