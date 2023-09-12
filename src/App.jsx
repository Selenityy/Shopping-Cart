import "./App.css";
// import { v4 as uuidv4 } from "uuid";
import React, { useEffect, useState, createContext } from "react";
import { Outlet } from "react-router-dom";
import CheckoutPage from "./components/checkout-page/CheckoutPage";
import HomePage from "./components/home-page/HomePage";

export const ProductsContext = React.createContext([]);

function App() {
  const [allProducts, setAllProducts] = useState([]);
  const [selectedProducts, setSelectedProducts] = useState([]); // length changes on add to cart button
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

  const handleItemCountChange = () => {
    // useEffect, happens on selectedProducts array length change
    // if the selected items array increases, then increase the cart item count by the same number
    // const itemsInCartArray = [...selectedItemsArray]; (copy the array)
    // const itemCount = itemsInCartArray.length; (get the length in a num)
    // setCartItemCount(itemCount); set the cart item count to the length num)
  };

  return (
    <>
      <ProductsContext.Provider value={contextValues}>
        <Outlet />
      </ProductsContext.Provider>
    </>
  );
}

export default App;
