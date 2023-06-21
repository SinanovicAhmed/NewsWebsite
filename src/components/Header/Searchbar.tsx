import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Searchbar = () => {
  const [searchField, setSearchField] = useState("");
  const navigate = useNavigate();
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    navigate(`/search/${searchField}`, { state: searchField });
  };
  return (
    <div
      className="w-full flex items-center h-[50px] absolute bottom-50 
                 left-0 bg-gray-300 px-[20px] md:px-[100px]"
    >
      <form onSubmit={(e) => handleSubmit(e)} className="w-full max-w-[1200px] flex mx-auto">
        <input
          onChange={(e) => setSearchField(e.target.value)}
          value={searchField}
          required
          autoFocus
          type="text"
          placeholder="Search"
          className="w-full h-[35px] mr-5 px-5"
        />
        <button className="px-[15px] py-[5px] bg-red-600 hover:bg-red-800 text-white">
          Search
        </button>
      </form>
    </div>
  );
};
