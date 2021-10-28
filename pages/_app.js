import "../styles/globals.css"
import Navbar from "../components/Navbar"
import { React, createContext, useState } from "react"
import PropTypes from "prop-types"
import Footer from "../components/Footer"

export const CartItemContext = createContext()

MyApp.propTypes = {
  Component: PropTypes.func,
  pageProps: PropTypes.object
}

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
