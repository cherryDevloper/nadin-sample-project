// axiosInstance.js

import axios from 'axios';
import { API_HEADERS, API_BASE_URL } from '../config';

const axiosInstance = axios.create({
  baseURL: API_BASE_URL,
  headers: API_HEADERS,
});

// Request interceptor
axiosInstance.interceptors.request.use(
  (config) => {
    // config.headers['Authorization'] = `Bearer ${token}`;
    return config;
  },
  (error) => {
    // Handle request errors
    return Promise.reject(error);
  },
);

// Response interceptor
axiosInstance.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    // Handle response errors
    return Promise.reject(error);
  },
);

export default axiosInstance;
