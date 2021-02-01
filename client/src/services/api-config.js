
import axios from 'axios';

const baseUrl = process.env.NODE_ENV === 'https://git.heroku.com/plant-back-end88.git' 

const api = axios.create({
  baseURL: baseUrl
})
export default api;