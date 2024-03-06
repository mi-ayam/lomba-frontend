import axios from "axios";
import axiosInstance from "./instance";
import { URL } from "./url";

const getAll = () => {
  const url = `${URL}`;
  return axiosInstance.get(`${url}/competitions`);
};

const get = (id) => {
  const url = `${URL}`;
  return axiosInstance.get(`${url}/competitions/${id}`);
};

const competitionService = {
  getAll,
  get,
};

export default competitionService;
