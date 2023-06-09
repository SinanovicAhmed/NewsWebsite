import { useQuery } from "@tanstack/react-query";
import React, { useContext, useEffect, useState } from "react";
import { getNews } from "../api/api";
import { ITopNews } from "../interfaces/news";
import { Header } from "../components/Header/Header";
import { CountryContext } from "../context/context";

const params = {
  endpoint: "/top-headlines",
  options: { country: "us", page: 1 },
};

export const Home: React.FC = () => {
  const { country } = useContext(CountryContext);
  const [news, setNews] = useState<ITopNews[]>([]);
  const [newsParams, setNewsParams] = useState(params);
  const { isLoading, isError, error, data, refetch } = useQuery(
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
  //changing country in params when context is changed
  useEffect(() => {
    setNewsParams((prevParams) => ({
      ...prevParams,
      options: { page: 1, country: country },
    }));
  }, [country]);
  //when country in params change refetch news for that country
  useEffect(() => {
    setNews([]);
    refetch();
  }, [newsParams.options.country, refetch]);

  return (
    <>
      <Header />
      <button onClick={() => loadMore()}>load more...</button>
    </>
  );
};
