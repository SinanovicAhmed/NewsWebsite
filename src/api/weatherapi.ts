import axios from "axios";
import { IWeatherResponse } from "../interfaces/weather";
import { INewsParams } from "../interfaces/news";
const baseURL = process.env.REACT_APP_WEATHER_URL;
const apiToken = process.env.REACT_APP_WEATHER_TOKEN;
console.log(baseURL, apiToken);

const newsApi = axios.create({
  baseURL,
});

export const getWeather = async ({ endpoint, options }: INewsParams): Promise<IWeatherResponse> => {
  try {
    const response = await newsApi.get(endpoint, {
      params: {
        key: apiToken,
        ...options,
      },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};
