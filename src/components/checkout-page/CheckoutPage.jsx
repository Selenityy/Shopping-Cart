import React from "react";
import { useNavigate } from "react-router-dom";
import SelectedProductTable from "./checkout-components/SelectedProductTable";
import CheckoutCalculationsTable from "./checkout-components/CheckoutCalculationsTable";
import "../../styles/Checkout.css";

const CheckoutPage = () => {
  const navigate = useNavigate();

  const handleGoBackClick = () => {
    navigate("/");
  };

  return (
    <div id="full-checkout-page">
      <div id="checkout-title-and-btn">
        <h2 id="checkout-title">Checkout Page</h2>
        <button id="back-home-btn" onClick={handleGoBackClick}>
          Go Back to Home
        </button>
      </div>
      <SelectedProductTable />
      <hr></hr>
      <CheckoutCalculationsTable />
    </div>
  );
};

export default CheckoutPage;
