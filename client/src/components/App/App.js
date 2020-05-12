import React from "react";
import { BrowserRouter } from "react-router-dom";
import Navigation from "./Navigation";
import Router from "./Router";

function App() {
  return (
    <BrowserRouter basename="/">
      <div className="container">
        <Navigation />
        <Router />
      </div>
    </BrowserRouter>
  );
}

export default App;

