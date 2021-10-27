import { useContext, useState } from "react";
import { CartItemContext } from "./_app";

export default function Cart() {
  const [cartItems, setCartItems] = useContext(CartItemContext);
  console.log(cartItems);

  return (
    <div>
      <p>{cartItems[0].prodName}</p>
    </div>
  );
}
