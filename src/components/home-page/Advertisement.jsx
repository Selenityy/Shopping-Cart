import React from "react";
import Button from "../utilities/Button";
import "../../styles/Advertisement.css";

const Advertisement = ({ adRef }) => {
  return (
    <div id="ad-section" className="sections">
      <h2 id="ad-title" ref={adRef}>
        New Arrivals
      </h2>
      <h3 id="ad-message">Find our newest collections here</h3>
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
