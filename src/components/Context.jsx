import React, { useState, useEffect, createContext } from "react";

export const ShopContext = createContext({
  allProducts: [],
  cartItems: [],
  addToCart: () => {},
});

const Context = ({ children }) => {
  const [allProducts, setAllProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);

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

  const addToCart = () => {};

  return (
    <>
      <ShopContext.Provider value={{ cartItems, allProducts, addToCart }}>
        {children}
      </ShopContext.Provider>
    </>
  );
};

export default Context;
