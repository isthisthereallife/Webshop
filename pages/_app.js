import "../styles/globals.css"
import Navbar from "../components/Navbar"
import { React} from "react"
import PropTypes from "prop-types"
import Footer from "../components/Footer"
import CartProvider from '../components/context/CartProvider'
MyApp.propTypes = {
  Component: PropTypes.func,
  pageProps: PropTypes.object
}

function MyApp({ Component, pageProps }) {
  return (
    <>
      <CartProvider>
        <Navbar />
        <Component {...pageProps} />
        <Footer />
      </CartProvider>
    </>
  )
}

export default MyApp
