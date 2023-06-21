import { useInfiniteQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { getNews } from "../api/api";
import { Header } from "../components/Header/Header";
import { CountryContext } from "../context/context";
import { HomeNews } from "../components/NewsDisplay/HomeNews";

export const Home: React.FC = () => {
  const { country } = useContext(CountryContext);
  const params = { endpoint: "/top-headlines", options: { country: country } };
  const { data, hasNextPage, fetchNextPage } = useInfiniteQuery(
    [params],
    ({ pageParam = 0, queryKey }) => getNews(queryKey[0], pageParam),
    {
      refetchOnWindowFocus: false,
      getNextPageParam(lastPage, pages) {
        if (pages.length * 20 < lastPage.totalResults) {
          return pages.length + 1;
        } else {
          return undefined;
        }
      },
    }
  );
  const handleLoadMore = () => {
    fetchNextPage();
  };
  const allArticles = data?.pages.flatMap((page) => page.articles) ?? [];
  return (
    <div className="w-full">
      <Header />
      <HomeNews news={allArticles} />
      <button
        disabled={!hasNextPage}
        onClick={handleLoadMore}
        className="px-4 py-2 my-10 font-medium bg-red-800 text-white disabled:opacity-25"
      >
        load more...
      </button>
    </div>
  );
};
