import axios from "axios";
import { URL } from "./url";

const axiosInstance = axios.create({
  URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosInstance;
