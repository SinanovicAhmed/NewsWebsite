import SearchIcon from "@mui/icons-material/Search";
import logo from "../../assets/images/logo.png";
import { countryData } from "../../constants/countryData";
import { CountryContext } from "../../context/context";
import { useContext } from "react";
import { Link } from "react-router-dom";
const styles = {
  "&:hover": { color: "DimGray" },
  cursor: "pointer",
  fontSize: { xs: 20, md: 25, lg: 30 },
};

export const Navbar: React.FC<{ toggleSearch: () => void }> = ({ toggleSearch }) => {
  const { country, handleCountryChange } = useContext(CountryContext);
  return (
    <div className="w-full h-16 px-[20px] md:px-[100px] shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]">
      <div className="w-full h-full max-w-[1200px] flex justify-between items-center mx-auto">
        <Link to="/">
          <img src={logo} alt="logo" className="w-[150px] md:w-[200px]" />
        </Link>
        <div className="flex justify-center items-center">
          <SearchIcon onClick={toggleSearch} sx={{ ...styles }} />
          <select
            id="contry"
            name="country"
            value={country}
            onChange={(e) => handleCountryChange(e.target.value)}
            className="outline-0 text-[13px] pl-2"
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
