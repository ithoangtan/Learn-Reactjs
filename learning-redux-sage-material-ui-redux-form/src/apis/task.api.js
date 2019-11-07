import axiosService from "./../commons/axios.service";
import { API_ENDPOINT } from "../constants/index.constants";

const url = "task";

export const getListTask = () => {
   return axiosService.get(`${API_ENDPOINT}/${url}`);
};
