import { Navbar } from "./Navbar";
import { Statusbar } from "./Statusbar";

export const Header: React.FC = () => {
  return (
    <header className="w-full bg-white sticky top-0 z-[100]">
      <Statusbar />
      <Navbar />
    </header>
  );
};
