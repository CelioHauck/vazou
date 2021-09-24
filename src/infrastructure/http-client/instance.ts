import axios from 'axios';

const { REACT_APP_BASE_URL } = process.env;

const baseURL = `${REACT_APP_BASE_URL}/`;

const instance = axios.create();

instance.defaults.baseURL = baseURL;

instance.interceptors.response.use((response) => {
  return response.data;
});

export default instance;
