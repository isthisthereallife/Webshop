import { React, createContext, useReducer } from 'react'
import { cartReducer } from '../../lib/reducers/cartReducer'
//import PropTypes from 'prop-types'


//skapar ett "context', dvs ett globalt state
export const CartContext = createContext()


//tar in children
const CartProvider = ({ children }) => {
  //dispatch är en typ av setter
  const [cart, cartDispatch] = useReducer(cartReducer, {
    cartItems: [],
    user: "User 1"
  })

  //wrappar sig själv runt children, dvs hela sidan eftersom vi lägger den så i _app.js
return (
  <CartContext.Provider value ={{ cart,
cartDispatch }}>
  {children}
  </CartContext.Provider>
)
}
export default CartProvider
