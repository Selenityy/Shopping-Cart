import React from "react";
import Button from "../utilities/Button";

const Advertisement = ({ adRef }) => {
  return (
    <div id="ad-section" className="sections">
      <h2 ref={adRef}>New Arrivals</h2>
      <h3>Find our newest collections here</h3>
      <Button
        id="shop-now-btn"
        className="shop-btn"
        // onClick={}
        label="SHOP NOW"
      />
    </div>
  );
};

export default Advertisement;
