import axios from "axios";
import { IWeatherResponse } from "../interfaces/weather";
import { INewsParams } from "../interfaces/news";

const newsApi = axios.create({ baseURL: "http://localhost:8080" });

export const getWeather = async ({ endpoint, options }: INewsParams): Promise<IWeatherResponse> => {
  try {
    const response = await newsApi.get(endpoint, {
      params: {
        ...options,
      },
    });
    return response.data.response;
  } catch (error) {
    throw error;
  }
};
