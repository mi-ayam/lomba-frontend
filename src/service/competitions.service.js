import axios from "axios";
import axiosInstance from "./instance";
import { URL } from "./url";

const getAll = () => {
  const url = `${URL}`;
  return axiosInstance.get(`${url}/competitions`);
};

const competitionService = {
  getAll,
};

export default competitionService;
