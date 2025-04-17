import axios from "axios";

const API_URL = window.location.origin + '/api';

export const axiosInstance = axios.create({
    baseURL: API_URL,
    withCredentials: true,
});