import React from "react";
import { BrowserRouter } from "react-router-dom";
import Navigation from "./Navigation";
import Router from "./Router";

function App() {
  return (
    <BrowserRouter basename="/">
      <>
        <Navigation />
        <Router />
      </>
    </BrowserRouter>
  );
}

export default App;
