// config.js
import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://dummyjson.com', // Base URL from config
});

export default axiosInstance;
