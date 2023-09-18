import React, { useState, useEffect, createContext } from "react";
import { useNavigate } from "react-router-dom";

export const ShopContext = createContext({
  products: [],
  cartItems: [],
  addToCart: () => {},
  increaseQuantity: () => {},
  decreaseQuantity: () => {},
  increaseQuantityInCheckout: () => {},
  decreaseQuantityInCheckout: () => {},
  handleShowAlert: () => {},
  handleCloseAlert: () => {},
  cartTotalItems: 0,
  totalPrice: 0,
  showAlert: false,
});

const Context = ({ children }) => {
  const [fetchedProducts, setFetchedProducts] = useState([]);
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [showAlert, setShowAlert] = useState(false);

  const navigate = useNavigate();

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
    const foundProductQuantity = foundProduct.quantity;
    if (foundProduct && foundProductQuantity > 0) {
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
    if (updatedCartItems[productIndex].quantity === 0) {
      const itemToRemove = updatedCartItems[productIndex];
      const newArray = updatedCartItems.filter((item) => item !== itemToRemove);
      setCartItems(newArray);
    }
  };

  useEffect(() => {
    const calculateTotalPrice = () => {
      const newTotalPrice = cartItems.reduce((total, product) => {
        const productPrice = product.quantity * product.price;
        return total + productPrice;
      }, 0);
      setTotalPrice(newTotalPrice);
    };
    calculateTotalPrice();
  }, [cartItems]);

  const handleShowAlert = () => {
    setShowAlert(true);
  };

  const handleCloseAlert = () => {
    setShowAlert(false);
    navigate("/");
    const wipeCart = [];
    setCartItems(wipeCart);
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
          handleShowAlert,
          handleCloseAlert,
          cartTotalItems,
          totalPrice,
          showAlert,
        }}
      >
        {children}
      </ShopContext.Provider>
    </>
  );
};

export default Context;
