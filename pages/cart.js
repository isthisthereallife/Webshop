import { useContext, useState } from "react";
import { CartItemContext } from "./_app";

export default function Cart({ cart }) {
  const { cartItems, setCartItems } = useContext(CartItemContext);
  const [checkoutItems, setCheckoutItems] = useState([]);
  checkoutItems.push(cart);

  return (
    <div>
      <p>{cartItems.prodName}</p>
      <p>{cartItems.prodPrice}</p>
      <p>{cartItems.q}</p>
    </div>
  );
}
