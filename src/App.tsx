import "./App.css";
import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
};

export default App;
