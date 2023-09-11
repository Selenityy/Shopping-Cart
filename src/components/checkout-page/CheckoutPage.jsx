import React from "react";
import { useNavigate } from "react-router-dom";

const CheckoutPage = () => {
  const navigate = useNavigate();

  const handleGoBackClick = () => {
    navigate("/"); // Use the navigate function to go back to the home page ("/")
  };

  return (
    <div>
      <h2>Checkout Page</h2>
      {/* Your checkout content */}
      <button onClick={handleGoBackClick}>Go Back to Home</button>
    </div>
  );
};

export default CheckoutPage;
