import axios from 'axios';

const { REACT_APP_BASE_URL } = process.env;

const baseURL = `${REACT_APP_BASE_URL}/`;

const instance = axios.create();

instance.defaults.baseURL = baseURL;

export default instance;
