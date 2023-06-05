import { API_BASE_URL } from '../config';
const WEATHER_ENDPOINTS = {
  getWeather: (lat: string, lng: string) =>
    `${API_BASE_URL}/forecast?latitude=${lat}&longitude=${lng}&current_weather=true`,
};
export { WEATHER_ENDPOINTS };
