import { React, createContext, useReducer } from 'react'
import { cartReducer } from '../../lib/reducers/cartReducer'
import PropTypes from 'prop-types'

export const CartContext = createContext()

const CartProvider = ({ children }) => {
  const [cart, cartDispatch] = useReducer(cartReducer, {
    cartItems: [],
    user: "User 1"
  })

  return (
    <CartContext.Provider value ={{ cart,
      cartDispatch }}>
  {children}
  </CartContext.Provider>
)
}

CartProvider.propTypes = {
  children: PropTypes.array
}
export default CartProvider
