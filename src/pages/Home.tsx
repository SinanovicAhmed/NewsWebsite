import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import { getNews } from "../api/api";
import { ITopNews } from "../interfaces/news";

const params = {
  endpoint: "/top-headlines",
  options: { country: "us", page: 1 },
};

export const Home: React.FC = () => {
  const [news, setNews] = useState<ITopNews[]>([]);
  const [newsParams, setNewsParams] = useState(params);
  const { isLoading, isError, error, data } = useQuery(
    ["topNews", newsParams.options.page],
    () => getNews(newsParams),
    {
      refetchOnWindowFocus: false,
      onSuccess: (data) => setNews((prevState) => [...prevState, ...data?.articles]),
    }
  );

  const loadMore = () => {
    if (data && news.length < data?.totalResults) {
      setNewsParams((prevState) => ({
        ...prevState,
        options: { ...prevState.options, page: prevState.options.page + 1 },
      }));
    }
  };

  if (!isLoading) console.log(newsParams.options.page, news);
  return (
    <>
      <div>Home Page</div>
      <button onClick={() => loadMore()}>load more...</button>
    </>
  );
};
