import "./App.css";
import React from "react";
import Context from "./components/Context";
import HomePage from "./components/home-page/HomePage";
import CheckoutPage from "./components/checkout-page/CheckoutPage";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <Context>
        <Outlet />
      </Context>
    </>
  );
}

export default App;
