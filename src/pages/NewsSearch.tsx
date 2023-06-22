import { useInfiniteQuery } from "@tanstack/react-query";
import { getNews } from "../api/api";
import { Header } from "../components/Header/Header";
import { NewsAll } from "../components/NewsDisplay/NewsAll";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import { NewsFilter } from "../components/NewsDisplay/NewsFilter";

export const NewsSearch: React.FC = () => {
  const { state: searchValue } = useLocation();
  const [selectedFilter, setSelectedFilter] = useState("publishedAt");
  const params = {
    endpoint: "/everything",
    options: { q: searchValue, pageSize: 20, sortBy: selectedFilter },
  };
  const { data, hasNextPage, fetchNextPage, isLoading } = useInfiniteQuery(
    [params],
    ({ pageParam = 1, queryKey }) => getNews(queryKey[0], pageParam),
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
    <>
      <Header />
      <div className="w-full px-[20px] md:px-[100px] py-[20px]">
        <NewsFilter changeFilter={setSelectedFilter} searchValue={searchValue} />
        <NewsAll newsList={allArticles} />
        {!isLoading ? (
          <button
            onClick={handleLoadMore}
            disabled={!hasNextPage}
            className="px-4 py-2 my-10 font-medium bg-red-800 text-white"
          >
            load more...
          </button>
        ) : (
          <p className="h-screen font-bold animate-pulse">Loading...</p>
        )}
      </div>
    </>
  );
};
