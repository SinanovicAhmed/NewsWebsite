import "./App.css";
import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { CountryProvider } from "./context/context";
import { NewsDetails } from "./pages/NewsDetail";
import { ScrollToTop } from "./components/Helpers/StrollToTop";
import { NewsSearch } from "./pages/NewsSearch";
const App = () => {
  return (
    <div className="App bg-gray-200">
      <CountryProvider>
        <ScrollToTop>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/details/:title" element={<NewsDetails />} />
            <Route path="/search/:searchTitle" element={<NewsSearch />} />
          </Routes>
        </ScrollToTop>
      </CountryProvider>
    </div>
  );
};

export default App;
