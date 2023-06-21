import axios from "axios";
import { ITopNews, ITopNewsResponse, INewsParams } from "../interfaces/news";

const baseURL = process.env.REACT_APP_API_URL;
const apiToken = process.env.REACT_APP_API_TOKEN;

const newsApi = axios.create({
  baseURL,
});

export const getNews = async (
  { endpoint, options }: INewsParams,
  pageParams: number
): Promise<ITopNewsResponse> => {
  try {
    const response = await newsApi.get(endpoint, {
      params: {
        ...options,
        page: pageParams,
        apiKey: apiToken,
      },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};
