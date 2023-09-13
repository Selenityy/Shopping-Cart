import React, { useState, useEffect, createContext } from "react";

export const ShopContext = createContext({
  products: [],
  cartItems: [],
  addToCart: () => {},
});

const Context = ({ children }) => {
  const [fetchedProducts, setFetchedProducts] = useState([]);
  const [products, setProducts] = useState([]);
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
        }));

        setFetchedProducts(products);
      } catch (error) {
        console.log("Error: ", error);
      }
    };

    fetchProducts();
  }, []);

  useEffect(() => {
    console.log("Fetched Products:", fetchedProducts);
    const fetchedProductsArray = [...fetchedProducts];
    const productsWithQuantity = fetchedProductsArray.map((product) => ({
      ...product,
      quantity: 0,
    }));
    setProducts(productsWithQuantity);
    console.log("Quantity Updated:", productsWithQuantity);
  }, [fetchedProducts]);

  const handleMinusClick = () => {};

  const handleAddClick = () => {};

  const addToCart = () => {};

  return (
    <>
      <ShopContext.Provider
        value={{ cartItems, products: fetchedProducts, addToCart }}
      >
        {children}
      </ShopContext.Provider>
    </>
  );
};

export default Context;
