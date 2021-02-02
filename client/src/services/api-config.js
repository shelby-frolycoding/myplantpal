
import axios from 'axios';

const baseUrl = process.env.NODE_ENV === 'production' ? 'https://git.heroku.com/plant-back-end88.git' : 'http://localhost:3000' 

const api = axios.create({
  baseURL: baseUrl
})
export default api;