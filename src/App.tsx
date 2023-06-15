import "./App.css";
import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { CountryProvider } from "./context/context";
const App = () => {
  return (
    <div className="App">
      <CountryProvider>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </CountryProvider>
    </div>
  );
};

export default App;
