import axios from 'axios';
import { API_URL_USER } from './constants';

export default axios.create({
  baseURL: API_URL_USER,
  headers: {
    'Content-Type': 'appLication/json',
  },
});
