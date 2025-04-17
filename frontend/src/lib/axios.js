import axios from "axios";

export const axiosInstance = axios.create({
    baseURL: "https://fictional-space-train-r4wxrv9r46gvh599v-5001.app.github.dev/api",
    withCredentials:true,
})