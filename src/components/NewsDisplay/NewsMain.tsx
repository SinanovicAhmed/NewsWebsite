import { ITopNews } from "../../interfaces/news";
interface HomeNewsProps {
  headerNews: ITopNews[];
}
export const NewsMain: React.FC<HomeNewsProps> = ({ headerNews }) => {
  const placeholder_img =
    "https://www.woodbridgeschool.org.uk/app/uploads/2021/07/placeholder_featured_image.svg";
  return (
    <div className="grid grid-cols-4 grid-rows-4 xs:grid-rows-6 gap-1 w-full max-w-[1200px] sm:max-h-[500px] mx-auto">
      <div className="relative cursor-pointer hover:brightness-90 row-span-1 col-span-6 xs:row-span-3 xs:col-span-2 sm:row-span-6">
        <img
          src={headerNews[0]?.urlToImage || placeholder_img}
          alt="news1"
          className="object-cover w-full h-full"
        />
        <div className="absolute p-2 xs:text-[12px] sm:text-[18px] bottom-0 left-0 text-white font-bold leading-tight bg-black bg-opacity-50">
          {headerNews[0]?.title}
        </div>
      </div>
      <div className="relative cursor-pointer hover:brightness-90 row-span-1 col-span-6 xs:col-span-2 xs:row-span-3 sm:col-start-3">
        <img
          src={headerNews[1]?.urlToImage || placeholder_img}
          alt="news1"
          className="object-cover w-full h-full"
        />
        <div className="absolute p-2 text-[12px] sm:text-[15px] bottom-0 left-0 text-white font-bold leading-tight bg-black bg-opacity-50">
          {headerNews[1]?.title}
        </div>
      </div>
      <div className="relative cursor-pointer hover:brightness-90 row-span-1 col-span-6 xs:col-span-2 xs:row-span-3 sm:col-span-1 sm:col-start-3 sm:row-start-4">
        <img
          src={headerNews[2]?.urlToImage || placeholder_img}
          alt="news1"
          className="object-cover w-full h-full"
        />
        <div className="absolute p-2 text-[12px] sm:text-[15px] bottom-0 left-0 text-white font-bold leading-tight bg-black bg-opacity-50">
          {headerNews[2]?.title}
        </div>
      </div>
      <div className="relative cursor-pointer hover:brightness-90 col-span-6 xs:col-span-2 xs:row-span-3 sm:col-span-1 sm:col-start-4 sm:row-start-4">
        <img
          src={headerNews[3]?.urlToImage || placeholder_img}
          alt="news1"
          className="object-cover w-full h-full"
        />
        <div className="absolute p-2 text-[12px] sm:text-[15px] bottom-0 left-0 text-white font-bold leading-tight bg-black bg-opacity-50">
          {headerNews[3]?.title}
        </div>
      </div>
    </div>
  );
};
