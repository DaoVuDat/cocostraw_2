import React from "react";

import "./App.scss";

import Header from "./components/header/Header";
import HomePage from "./pages/homepage/HomePage";

const App = () => {
  return (
    <div className="app">
      <Header />
      <HomePage />
    </div>
  );
};

export default App;
