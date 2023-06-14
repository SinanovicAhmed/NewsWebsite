import { NewsMain } from "./NewsMain";
import { ITopNews } from "../../interfaces/news";
import { NewsAll } from "./NewsAll";

export const HomeNews: React.FC<{ news: ITopNews[] }> = (props) => {
  const headerNews = props.news.slice(0, 4);
  const news = props.news.slice(4);

  return (
    <main className="w-full px-[20px] md:px-[100px] py-[20px]">
      <NewsMain headerNews={headerNews} />
      <h2
        className="max-w-[1200px] pl-[10px] my-[20px] text-red-800 text-left 
                   border-l-4 border-b-2 border-red-800 font-bold text-[20px] mx-auto"
      >
        Top News
      </h2>
      <NewsAll newsList={news} />
    </main>
  );
};
