import { ITopNews } from "../../interfaces/news";
import { NewsCard } from "./NewsCard";

export const NewsAll: React.FC<{ newsList: ITopNews[] }> = ({ newsList }) => {
  return (
    <div className="w-full max-w-[1200px] grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-3 gap-5 mx-auto">
      {newsList?.map((newsItem) => {
        return <NewsCard key={newsItem.title} news={newsItem} />;
      })}
    </div>
  );
};
