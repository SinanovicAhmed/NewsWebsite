import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { ITopNews } from "../interfaces/news";
import { getNews } from "../api/api";
import { Header } from "../components/Header/Header";
import { NewsAll } from "../components/NewsDisplay/NewsAll";

const params = {
  endpoint: "/everything",
  options: { q: "bitcoin", page: 1, pageSize: 20 },
};

export const NewsSearch: React.FC = () => {
  const [news, setNews] = useState<ITopNews[]>([]);
  const [newsParams, setNewsParams] = useState(params);
  const { isLoading, isError, error, data } = useQuery(
    ["searchNews", newsParams.options.page],
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
  return (
    <>
      <Header />
      <div className="w-full px-[20px] md:px-[100px] py-[20px]">
        <NewsAll newsList={news} />
        <button
          onClick={loadMore}
          disabled={!nextPage}
          className="px-4 py-2 my-10 font-medium bg-red-800 text-white"
        >
          load more...
        </button>
      </div>
    </>
  );
};
