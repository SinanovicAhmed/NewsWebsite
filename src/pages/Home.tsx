import { useQuery } from "@tanstack/react-query";
import React from "react";
import { getNews } from "../api/api";
import { INewsParams } from "../interfaces/news";

const newsParams = {
  endpoint: "/top-headlines",
  options: { country: "us" },
};

export const Home: React.FC = () => {
  const { isLoading, isError, error, data } = useQuery(["topNews", newsParams], () =>
    getNews(newsParams)
  );
  if (!isLoading) console.log(data);
  return <div>Home Page</div>;
};
