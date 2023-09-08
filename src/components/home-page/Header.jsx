import React from "react";
import MiniCart from "./header-components/MiniCart";
import PageSelections from "./header-components/PageSelections";
import Icons from "./header-components/Icons";

const Header = ({ scrollToAd }) => {
  return (
    <>
      <h1>Brand Name</h1>
      <PageSelections scrollToAd={scrollToAd} />
      <Icons />
      <MiniCart />
    </>
  );
};

export default Header;
