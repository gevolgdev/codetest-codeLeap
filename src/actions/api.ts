import axios, {AxiosInstance} from 'axios';

const api: AxiosInstance = axios.create({
  baseURL: 'https://dev.codeleap.co.uk/',
  headers: {
    'Content-type': 'aplication/json',
  }
});

export default api;