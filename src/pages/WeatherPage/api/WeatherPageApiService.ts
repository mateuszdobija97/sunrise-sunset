import { httpGet } from "../../../common/http/httpService";

const API_KEY = '6de829710ea0df4ec06b4bd5ff44eaa5';

export const getWeatherByGeographicCoordinates = (latitude: number, longitude: number): Promise<any> => {
    return httpGet(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}`);
  };