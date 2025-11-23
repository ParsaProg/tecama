import axios from "axios";
import { API_KEY } from "../secret/api.js";

// client for tecama-api
const client = axios.create({
  baseURL: "https://tecama-api.vercel.app/api",
  headers: { "x-api-key": API_KEY },
});

export const fetchCourses = () => client.get("/courses").then((r) => r.data);
export const fetchArticles = () => client.get("/articles").then((r) => r.data);
export const fetchNews = () => client.get("/news").then((r) => r.data);
export const fetchUsers = () =>
  axios.get("https://retoolapi.dev/tPNiZj/tecama-users").then((r) => r.data);
