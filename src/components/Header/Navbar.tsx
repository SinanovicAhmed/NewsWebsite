import SearchIcon from "@mui/icons-material/Search";
import logo from "../../assets/images/logo.png";
import { countryData } from "../../JSON/countryData";
import { CountryContext } from "../../context/context";
import { useContext } from "react";
const styles = {
  "&:hover": { color: "DimGray" },
  cursor: "pointer",
  fontSize: { xs: 20, md: 25, lg: 30 },
};

export const Navbar: React.FC = () => {
  const { country, handleCountryChange } = useContext(CountryContext);

  return (
    <div className="w-full h-16 px-[20px] md:px-[100px] shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]">
      <div className="w-full h-full max-w-[1200px] flex justify-between items-center mx-auto">
        <img src={logo} alt="logo" width="200" className="hover:cursor-pointer" />
        <div className="flex justify-center items-center">
          <SearchIcon sx={{ ...styles }} />
          <select
            id="contry"
            name="country"
            value={country}
            onChange={(e) => handleCountryChange(e.target.value)}
            className="outline-0 text-[13px] pl-2 hover:cursor-pointer"
          >
            {Object.keys(countryData).map((countryCode) => (
              <option key={countryCode} value={countryCode}>
                {countryCode}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};
