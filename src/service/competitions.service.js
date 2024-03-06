import axios from "axios";
import axiosInstance from "./instance";
import { URL } from "./url";

const url = URL;

const getAll = () => {
  return axiosInstance.get(`${url}/competitions`);
};

const get = (id) => {
  return axiosInstance.get(`${url}/competitions/${id}`);
};

const remove = (id) => {
  return axiosInstance.delete(`${url}/competitions/${id}`);
};

const competitionService = {
  getAll,
  get,
  remove,
};

export default competitionService;
