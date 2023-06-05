import { WEATHER_ENDPOINTS } from '../endpoints';
import axiosInstance from '../utils/axiosInstance';

const getWeather = (lat: string, lng: string) => {
  return axiosInstance.get(WEATHER_ENDPOINTS.getWeather(lat, lng));
};
export { getWeather };
