import React, { useState, useEffect, createContext, useReducer } from "react";

export const ShopContext = createContext({
  products: [],
  cartItems: [],
  addToCart: () => {},
  increaseQuantity: () => {},
  decreaseQuantity: () => {},
  increaseQuantityInCheckout: () => {},
  decreaseQuantityInCheckout: () => {},
  cartTotalItems: 0,
});

const Context = ({ children }) => {
  const [fetchedProducts, setFetchedProducts] = useState([]);
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  const initialValue = 0;
  const cartTotalItems = cartItems
    .map((product) => product.quantity)
    .reduce(
      (accumulator, currentValue) => accumulator + currentValue,
      initialValue
    );

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
    const fetchedProductsArray = [...fetchedProducts];
    const productsWithQuantity = fetchedProductsArray.map((product) => ({
      ...product,
      quantity: 0,
    }));
    setProducts(productsWithQuantity);
  }, [fetchedProducts]);

  const decreaseQuantity = (productId) => {
    setProducts((prevProducts) => {
      return prevProducts.map((product) => {
        if (product.id === productId && product.quantity > 0) {
          return {
            ...product,
            quantity: product.quantity - 1,
          };
        }
        return product;
      });
    });
  };

  const increaseQuantity = (productId) => {
    setProducts((prevProducts) => {
      return prevProducts.map((product) => {
        if (product.id === productId) {
          return {
            ...product,
            quantity: product.quantity + 1,
          };
        }
        return product;
      });
    });
  };

  const addToCart = (productId) => {
    const updatedCartItems = [...cartItems];
    const foundProduct = products.find((product) => product.id === productId);
    if (foundProduct) {
      updatedCartItems.push(foundProduct);
      setCartItems(updatedCartItems);
    }
  };

  const increaseQuantityInCheckout = (productId) => {
    const productIndex = cartItems.findIndex((item) => item.id === productId);
    const updatedCartItems = [...cartItems];
    updatedCartItems[productIndex].quantity += 1;
    setCartItems(updatedCartItems);
  };

  const decreaseQuantityInCheckout = (productId) => {
    const productIndex = cartItems.findIndex((item) => item.id === productId);
    const updatedCartItems = [...cartItems];
    if (updatedCartItems[productIndex].quantity > 0) {
      updatedCartItems[productIndex].quantity -= 1;
      setCartItems(updatedCartItems);
    }
  };

  return (
    <>
      <ShopContext.Provider
        value={{
          cartItems,
          products,
          addToCart,
          increaseQuantity,
          decreaseQuantity,
          increaseQuantityInCheckout,
          decreaseQuantityInCheckout,
          cartTotalItems,
        }}
      >
        {children}
      </ShopContext.Provider>
    </>
  );
};

export default Context;
