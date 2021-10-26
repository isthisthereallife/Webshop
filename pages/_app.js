import "../styles/globals.css";
import Head from "next/head";
import "bootstrap/dist/css/bootstrap.css";

import { createContext, useState } from "react";

export const CartItemContext = createContext();

function MyApp({ Component, pageProps }) {
  const [cartItems, setCartItems] = useState({});
  return (
    <CartItemContext.Provider value={{ cartItems, setCartItems }}>
      <Component {...pageProps} />
    </CartItemContext.Provider>
  );
}

export default MyApp;
