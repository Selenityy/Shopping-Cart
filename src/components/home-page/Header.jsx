import React from "react";
import MiniCart from "./header-components/MiniCart";
import PageSelections from "./header-components/PageSelections";
import Icons from "./header-components/Icons";

const Header = ({ scrollToAd }) => {
  return (
    <div id="header-section" className="sections">
      <h1>Amazela</h1>
      <PageSelections scrollToAd={scrollToAd} />
      <Icons />
      <MiniCart />
    </div>
  );
};

export default Header;
