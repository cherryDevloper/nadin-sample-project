import { API_BASE_URL } from '../config';
const WEATHER_ENDPOINTS = {
  getWeather: (lat: string, lng: string) =>
    // 'https://api.open-meteo.com/v1/forecast?latitude=38.08&longitude=46.29&current_weather=true',
    `${API_BASE_URL}forecast?latitude=${lat}&longitude=${lng}&current_weather=true`,
};
export { WEATHER_ENDPOINTS };
