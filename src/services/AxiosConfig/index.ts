import axios from 'axios';

if (window.location.host !== 'localhost:3000') {
  console.clear();
}

const api = axios.create({
  baseURL: 'https://api.openmeteo.com/v1/',
  headers: {
    Authorization: true,
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
});

export default api;
