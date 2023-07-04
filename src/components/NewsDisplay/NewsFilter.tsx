import { INewsFilterParams } from "../../interfaces/news";
export const NewsFilter: React.FC<INewsFilterParams> = ({ changeFilter, searchValue }) => {
  return (
    <div
      className="w-full max-w-[1200px] flex justify-between py-[10px] 
                        mx-auto border-y-2 border-gray-300 mb-[15px]"
    >
      <p>Showing result for: "{searchValue}"</p>
      <span className="flex">
        <p>Sort by: </p>
        <select className="ml-2" onChange={(e) => changeFilter(e.target.value)}>
          <option value="publishedAt">date</option>
          <option value="popularity">popularity</option>
          <option value="relevancy">relevancy</option>
        </select>
      </span>
    </div>
  );
};
