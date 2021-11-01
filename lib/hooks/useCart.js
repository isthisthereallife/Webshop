import { CartContext } from "../../components/context/CartProvider"
import { useContext } from 'react'

export default function useCart() {
  const cart = useContext(CartContext)
  return cart
}
