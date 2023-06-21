import { useLocation } from "react-router-dom";
import { Header } from "../components/Header/Header";
import { dateFormat } from "../helpers/dateFormat";
import QueryBuilderIcon from "@mui/icons-material/QueryBuilder";

export const NewsDetails: React.FC = () => {
  const { state: news } = useLocation();
  const formatedDate = dateFormat(new Date(news.publishedAt));

  return (
    <>
      <Header />
      <div className="w-full px-[20px] md:px-[100px] py-[20px]">
        <div className="w-full max-w-[800px] mx-auto">
          <h1 className="text-left pb-[15px] font-black text-[20px] md:text-[30px]">
            {news.title}
          </h1>
          <h3 className="text-left text-gray-600">{news.description}</h3>
          <div className="flex py-[10px]">
            <QueryBuilderIcon fontSize="small" />
            <p className="text-left pl-[5px] text-[15px] text-gray-600">{formatedDate}</p>
          </div>
          <img
            src={
              news.urlToImage ||
              "https://www.woodbridgeschool.org.uk/app/uploads/2021/07/placeholder_featured_image.svg"
            }
            alt={news.title}
          />
          <p className="py-[20px] text-left">{news.content}</p>
          <a href={news.url} target="_blank" rel="noreferrer">
            <p className="text-left pb-[20px] text-[15px] text-blue-500 hover:underline">
              Read more: {news.title}
            </p>
          </a>
          <iframe src={news.url} title={news.title} className="w-full h-[500px]" />
        </div>
      </div>
    </>
  );
};
