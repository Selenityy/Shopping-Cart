import React from "react";
import { useNavigate } from "react-router-dom";
import SelectedProductTable from "./checkout-components/SelectedProductTable";
import CheckoutCalculationsTable from "./checkout-components/CheckoutCalculationsTable";

const CheckoutPage = () => {
  const navigate = useNavigate();

  const handleGoBackClick = () => {
    navigate("/");
  };

  return (
    <div>
      <h2>Checkout Page</h2>
      <button onClick={handleGoBackClick}>Go Back to Home</button>
      <SelectedProductTable />
      <CheckoutCalculationsTable />
    </div>
  );
};

export default CheckoutPage;
