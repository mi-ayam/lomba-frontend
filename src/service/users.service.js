import axios from "axios";
import { URL } from "./url";
import axiosInstance from "./instance";

const url = URL;

const create = (data, headers) => {
  return axios.post(`${url}/users`, data, headers);
};

const userServices = {
  create,
};

export default userServices;
