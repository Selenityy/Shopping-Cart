import React, { createContext, useState, useEffect } from "react";

export const ProductsContext = React.createContext([]);

const Context = ({ children }) => {
  const [allProducts, setAllProducts] = useState([]);
  const [selectedProducts, setSelectedProducts] = useState([]);
  const contextValues = {
    allProducts,
    selectedProducts,
  };

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");

        if (!response.ok) {
          throw new Error(
            `This is an HTTP error: The status is ${response.status}`
          );
        }

        const data = await response.json();
        // console.log("Data: ", data);

        const products = data.map((product) => ({
          id: product.id,
          name: product.title,
          description: product.description,
          price: product.price,
          image: product.image,
          category: product.category,
          quantity: 0,
        }));

        setAllProducts(products);
      } catch (error) {
        console.log("Error: ", error);
      }
    };

    fetchProducts();
  }, []);

  const handleMinusClick = () => {};

  const handleAddClick = () => {};

  return (
    <>
      <ProductsContext.Provider value={contextValues}>
        {/* <Outlet /> */}
        {children}
      </ProductsContext.Provider>
    </>
  );
};

export default Context;
