import { ReactNode } from "react";
export interface ICountryContextProps {
  country: string;
  handleCountryChange: (selectedCountry: string) => void;
}
export interface IProviderProps {
  children: ReactNode;
}
