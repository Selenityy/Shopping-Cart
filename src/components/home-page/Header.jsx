import React, { useState } from "react";
import MiniCart from "./header-components/MiniCart";
import PageSelections from "./header-components/PageSelections";
import Icons from "./header-components/Icons";

const Header = ({ scrollToAd, scrollToProducts }) => {
  const [isCheckoutVisible, setIsCheckoutVisible] = useState(false);

  const handleCartClick = () => {
    setIsCheckoutVisible(!isCheckoutVisible);
  };

  return (
    <div id="header-section" className="sections">
      <h1 id="brand-name">Amazela</h1>
      <PageSelections
        scrollToAd={scrollToAd}
        scrollToProducts={scrollToProducts}
      />
      <Icons handleCartClick={handleCartClick} />
      <MiniCart
        handleCartClick={handleCartClick}
        isVisible={isCheckoutVisible}
      />
    </div>
  );
};

export default Header;
