import axios from "axios";
import { ITopNews, ITopNewsResponse, INewsParams } from "../interfaces/news";

const newsApi = axios.create({ baseURL: "http://localhost:8080" });

export const getNews = async (
  { endpoint, options }: INewsParams,
  pageParams: number
): Promise<ITopNewsResponse> => {
  try {
    const response = await newsApi.get(endpoint, {
      params: {
        ...options,
        page: pageParams,
      },
    });
    return response.data.response;
  } catch (error) {
    throw error;
  }
};
