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

const create = (data, headers) => {
  return axios.post(`${url}/competitions`, data, headers);
};

const update = (id, data, headers) => {
  return axios.put(`${url}/competitions/${id}`, data, headers);
};

const competitionService = {
  getAll,
  get,
  remove,
  create,
  update,
};

export default competitionService;
