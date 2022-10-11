import axios from "axios";

const baseURL = 'https://nodejs-api-heroes.up.railway.app';

const heroesApi = axios.create({ baseURL })

export default heroesApi; 