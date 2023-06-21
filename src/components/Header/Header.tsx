import { Navbar } from "./Navbar";
import { Searchbar } from "./Searchbar";
import { Statusbar } from "./Statusbar";
import { useState } from "react";

export const Header: React.FC = () => {
  const [showSearch, setShowSearch] = useState(false);

  const toggleSearch = () => {
    setShowSearch(!showSearch);
  };

  return (
    <header className="w-full bg-white sticky top-0 z-[100] relative">
      <Statusbar />
      <Navbar toggleSearch={toggleSearch} />
      {showSearch && <Searchbar />}
    </header>
  );
};
