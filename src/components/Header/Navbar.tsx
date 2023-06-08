import { Statusbar } from "./Statusbar";
import SearchIcon from "@mui/icons-material/Search";
import logo from "../../assets/images/logo.png";

const styles = {
  "&:hover": { color: "DimGray" },
  cursor: "pointer",
  fontSize: { xs: 20, md: 25, lg: 30 },
};

export const Navbar: React.FC = () => {
  return (
    <div className="w-full h-16 px-[20px] md:px-[100px] shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]">
      <div className="w-full h-full max-w-[1200px] flex justify-between items-center mx-auto">
        <img src={logo} alt="logo" width="200" className="hover:cursor-pointer" />
        <div className="flex justify-center items-center">
          <SearchIcon sx={{ ...styles }} />
          <select id="cars" name="cars" className="outline-0 text-[13px] pl-2 hover:cursor-pointer">
            <option value="volvo">US</option>
            <option value="saab">BA</option>
            <option value="fiat">EU</option>
          </select>
        </div>
      </div>
    </div>
  );
};
