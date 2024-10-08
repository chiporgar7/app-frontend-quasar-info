import axios from 'axios';
import { useAuthStore } from 'src/stores/AuthStore';


const headers: any = {
  Accept: 'application/json',
  'Content-Type': 'application/json',
};

const instanceAxios = axios.create({
  baseURL: process.env.BASE_URL || '', // o cualquier valor por defecto
  headers
  // timeout: 1000,
});

instanceAxios.interceptors.request.use(config => {
  const authStore = useAuthStore();
  const token = authStore.token;
  config.headers.Authorization = 'Bearer ' + token;
  return config;
});

// Configuraciones adicionales

export default instanceAxios;
