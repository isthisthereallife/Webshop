import { useContext, useState } from "react";
import { CartItemContext } from "./_app";

export default function Cart() {
  const [cartItems, setCartItems] = useContext(CartItemContext);
  console.log(cartItems);

  return (
    <div>
      {cartItems.map((cartItem) => (
        <div>
          <p>{cartItem.prodName}</p>
          <p>{cartItem.prodPrice}</p>
          <p>{cartItem.q}</p>
        </div>
      ))}
    </div>
  );
}
