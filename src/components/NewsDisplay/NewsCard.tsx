import { Link } from "react-router-dom";
import { ITopNews } from "../../interfaces/news";

export const NewsCard: React.FC<{ news: ITopNews }> = ({ news }) => {
  let trimmedTitle;
  if (news.title.includes(" - ")) {
    trimmedTitle = news.title.substring(0, news.title.lastIndexOf(" - "));
  } else {
    trimmedTitle = news.title;
  }
  const title = news.title.replaceAll(" ", "-");

  return (
    <Link
      to={`/details/${title}`}
      state={news}
      className="grow bg-white shaddow-sm border-t-8 border-transparent hover:border-red-800 transition-all"
    >
      <img
        src={
          news.urlToImage ||
          "https://www.woodbridgeschool.org.uk/app/uploads/2021/07/placeholder_featured_image.svg"
        }
        alt="newsCard"
        className="object-cover w-full aspect-video"
      />
      <div className="p-[5px]">
        <h2 className="font-black text-[15px]">{trimmedTitle}</h2>
        <p className="pt-[5px] text-[15px] font-thin">{news.description}</p>
      </div>
    </Link>
  );
};
