import { Navbar } from "./Navbar";
import { Statusbar } from "./Statusbar";

export const Header: React.FC = () => {
  return (
    <header className="w-screen">
      <Statusbar />
      <Navbar />
    </header>
  );
};
