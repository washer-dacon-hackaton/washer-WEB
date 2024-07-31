import { BASE_URL } from "../shared/utils/constants";
import axios from "axios";

const client = axios.create({
  baseURL: BASE_URL,
  Headers: { "Content-Type": "application/json" },
});

export default client;
