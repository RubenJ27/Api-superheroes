import axios from "axios";

const baseURL = 'https://api-superheroes-server.herokuapp.com';

const heroesApi = axios.create({ baseURL })

export default heroesApi; 