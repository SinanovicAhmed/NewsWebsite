import { createContext, useState, ReactNode, useEffect } from "react";

interface ICountryContextProps {
  country: string;
  handleCountryChange: (selectedCountry: string) => void;
}
interface ProviderProps {
  children: ReactNode;
}

export const CountryContext = createContext<ICountryContextProps>({
  country: "",
  handleCountryChange: () => {},
});

export const CountryProvider: React.FC<ProviderProps> = ({ children }) => {
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

  return <CountryContext.Provider value={{ country, handleCountryChange }}>{children}</CountryContext.Provider>;
};
