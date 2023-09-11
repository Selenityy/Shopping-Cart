import React, { useContext, useRef } from "react";
import { ProductsContext } from "../../App";
import Advertisement from "./Advertisement";
import Header from "./Header";
import ProductTable from "./ProductTable";

const HomePage = () => {
  const products = useContext(ProductsContext);

  const adRef = useRef(null);

  const scrollToAd = () => {
    if (adRef.current) {
      adRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <Header scrollToAd={scrollToAd} />
      <Advertisement adRef={adRef} />
      <ProductTable products={products} />
    </>
  );
};

export default HomePage;
