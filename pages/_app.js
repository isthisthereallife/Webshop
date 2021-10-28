import Head from "next/head"
//import "bootstrap/dist/css/bootstrap.css";
import "../styles/globals.css"
import Navbar from "../components/Navbar"
import { createContext, useState } from "react"
import Footer from "../components/Footer"

export const CartItemContext = createContext()

function MyApp({ Component, pageProps }) {
  const [cartItems, setCartItems] = useState([])
  return (
    <>
      <CartItemContext.Provider value={[cartItems, setCartItems]}>
        <Navbar />
        <Component {...pageProps} />
        <Footer />
      </CartItemContext.Provider>
    </>
  )
}

export default MyApp
