import { ITopNews } from "../../interfaces/news";
import { NewsCard } from "./NewsCard";

export const NewsAll: React.FC<{ news: ITopNews[] }> = ({ news }) => {
  return (
    <div className="w-full max-w-[1200px] grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-3 gap-5 mx-auto">
      {news?.map((n) => {
        return <NewsCard news={n} />;
      })}
    </div>
  );
};
