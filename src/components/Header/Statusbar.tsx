import { dateFormat } from "../../helpers/dateFormat";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import { useQuery } from "@tanstack/react-query";
import { getWeather } from "../../api/weatherapi";
import React, { useState, useContext, useEffect } from "react";
import { CountryContext } from "../../context/context";
import { countryData } from "../../constants/countryData";

const styles = {
  color: "white",
  "&:hover": { color: "gray" },
  cursor: "pointer",
};

const params = {
  endpoint: "/current.json",
  options: { q: "London", aqi: "no" },
};

export const Statusbar: React.FC = () => {
  const date = new Date();
  const formatedDate = dateFormat(date);
  const { country } = useContext(CountryContext);
  const [weatherParams, setWeatherParams] = useState(params);
  const { isLoading, isError, data, error } = useQuery(["weather", weatherParams.options.q], () =>
    getWeather(weatherParams)
  );

  useEffect(() => {
    setWeatherParams((prevParams) => ({
      ...prevParams,
      options: { ...prevParams.options, q: countryData[country].country },
    }));
  }, [country]);

  let weatherInfo = `${data?.current.temp_c}°C   ${data?.location.name}`;
  if (isError) {
    weatherInfo = "Weather unavailable";
  }

  return (
    <div className="w-full bg-[#222222] px-[20px] md:px-[100px]">
      <div className="w-full h-full max-w-[1200px] flex justify-between items-center mx-auto">
        <div className="w-full justify-between md:justify-start flex gap-5">
          {!isLoading ? (
            <p className="text-white">{weatherInfo}</p>
          ) : (
            <p className="text-white">Loading...</p>
          )}
          <p className="text-white">{formatedDate}</p>
        </div>
        <div className="hidden md:flex gap-3">
          <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
            <FacebookIcon sx={{ ...styles }} />
          </a>
          <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
            <InstagramIcon sx={{ ...styles }} />
          </a>
          <a href="https://twitter.com/" target="_blank" rel="noreferrer">
            <TwitterIcon sx={{ ...styles }} />
          </a>
          <a href="https://www.youtube.com/" target="_blank" rel="noreferrer">
            <YouTubeIcon sx={{ ...styles }} />
          </a>
        </div>
      </div>
    </div>
  );
};
