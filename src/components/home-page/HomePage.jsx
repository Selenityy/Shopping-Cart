import React, { useRef } from "react";
import Advertisement from "./Advertisement";
import Header from "./Header";
import ProductTable from "./ProductTable";

const HomePage = () => {
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
      <ProductTable />
    </>
  );
};

export default HomePage;
