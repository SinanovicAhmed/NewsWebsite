import { Link, useNavigate } from "react-router-dom";
import { ITopNews } from "../../interfaces/news";

export const NewsCard: React.FC<{ news: ITopNews }> = ({ news }) => {
  const trimmedTitle = news.title.substring(0, news.title.lastIndexOf(" - "));
  const title = news.title.replaceAll(" ", "-");
  const navigate = useNavigate();

  return (
    <Link
      to={`/details/${title}`}
      state={news}
      className="grow bg-gray-100 cursor-pointer border-t-8 border-transparent hover:border-red-800 transition-all"
    >
      <img
        src={
          news.urlToImage ||
          "https://www.woodbridgeschool.org.uk/app/uploads/2021/07/placeholder_featured_image.svg"
        }
        alt="newsCard"
        className="object-cover w-full h-[50%]"
      />
      <div className="p-[5px]">
        <h2 className="font-black">{trimmedTitle}</h2>
        <p className="text-ellipsis overflow-hidden pt-[5px] font-thin">{news.description}</p>
      </div>
    </Link>
  );
};
