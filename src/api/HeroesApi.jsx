import axios from "axios";

const baseURL = 'https://app-heroes-server-alterna-production.up.railway.app';

const heroesApi = axios.create({ baseURL })

export default heroesApi; 