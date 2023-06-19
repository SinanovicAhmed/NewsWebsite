import { useQuery } from "@tanstack/react-query";
import React, { useContext, useEffect, useState } from "react";
import { getNews } from "../api/api";
import { ITopNews } from "../interfaces/news";
import { Header } from "../components/Header/Header";
import { CountryContext } from "../context/context";
import { HomeNews } from "../components/NewsDisplay/HomeNews";
const params = {
  endpoint: "/top-headlines",
  options: { country: "us", page: 1 },
};

export const Home: React.FC = () => {
  const { country } = useContext(CountryContext);
  const [news, setNews] = useState<ITopNews[]>([]);
  const [newsParams, setNewsParams] = useState(params);
  const { isLoading, isError, error, data } = useQuery(
    ["topNews", newsParams.options.page, newsParams.options.country],
    () => getNews(newsParams),
    {
      refetchOnWindowFocus: false,
      onSuccess: (data) => setNews((prevState) => [...prevState, ...data?.articles]),
    }
  );
  const nextPage = data && news.length < data.totalResults;
  const loadMore = () => {
    if (nextPage) {
      setNewsParams((prevState) => ({
        ...prevState,
        options: { ...prevState.options, page: prevState.options.page + 1 },
      }));
    }
  };
  /*changing country in params when context is changed which will triger rerender
  because newsParams.options.country is key in useQuery*/
  useEffect(() => {
    setNews([]);
    setNewsParams((prevParams) => ({
      ...prevParams,
      options: { page: 1, country: country },
    }));
  }, [country]);

  return (
    <div className="w-full">
      <Header />
      <HomeNews news={news} />
      <button
        onClick={loadMore}
        disabled={!nextPage}
        className="px-4 py-2 my-10 font-medium bg-red-800 text-white disabled:opacity-25"
      >
        load more...
      </button>
    </div>
  );
};
