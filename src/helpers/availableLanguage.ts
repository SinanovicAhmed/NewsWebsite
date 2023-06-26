import { availableLanguages } from "../constants/availableLanguages";
import { countryData } from "../constants/countryData";
export const availableLanguage = (languageCode: string) => {
  const language = countryData[languageCode].language;
  if (availableLanguages.includes(language)) {
    return language;
  }
  return "";
};
