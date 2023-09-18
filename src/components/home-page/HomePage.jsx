import React, { useRef } from "react";
import Advertisement from "./Advertisement";
import Header from "./Header";
import ProductTable from "./ProductTable";

const HomePage = () => {
  const adRef = useRef(null);
  const productRef = useRef(null);
  const homeRef = useRef(null);

  const scrollToAd = () => {
    if (adRef.current) {
      adRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToProducts = () => {
    if (productRef.current) {
      productRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToHome = () => {
    if (homeRef.current) {
      homeRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <div ref={homeRef}></div>
      <Header
        scrollToAd={scrollToAd}
        scrollToProducts={scrollToProducts}
        scrollToHome={scrollToHome}
      />
      <Advertisement adRef={adRef} />
      <ProductTable productRef={productRef} />
    </>
  );
};

export default HomePage;