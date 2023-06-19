import { createContext, useState, useEffect } from "react";
import { ICountryContextProps, IProviderProps } from "../interfaces/context";

export const CountryContext = createContext<ICountryContextProps>({
  country: "",
  handleCountryChange: () => {},
});

export const CountryProvider: React.FC<IProviderProps> = ({ children }) => {
  const [country, setCountry] = useState("us");

  useEffect(() => {
    const storedCountry = localStorage.getItem("country_code");
    if (storedCountry) {
      setCountry(storedCountry);
    }
  }, []);

  const handleCountryChange = (selectedCountry: string) => {
    setCountry(selectedCountry);
    localStorage.setItem("country_code", selectedCountry);
  };

  return (
    <CountryContext.Provider value={{ country, handleCountryChange }}>
      {children}
    </CountryContext.Provider>
  );
};
