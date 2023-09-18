import React, { useState } from "react";
import PageSelections from "./header-components/PageSelections";
import Icons from "./header-components/Icons";
import "../../styles/Header.css";

const Header = ({
  scrollToAd,
  scrollToProducts,
  scrollToHome,
  handleCartClick,
}) => {
  return (
    <div id="header-section" className="sections">
      <h1 id="brand-name">Amazela</h1>
      <PageSelections
        scrollToAd={scrollToAd}
        scrollToProducts={scrollToProducts}
        scrollToHome={scrollToHome}
      />
      <div id="header-hr" className="horizontal-line"></div>
      <Icons handleCartClick={handleCartClick} />
    </div>
  );
};

export default Header;
