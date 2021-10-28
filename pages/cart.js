import { useContext, useEffect, useState } from "react";
import { CartItemContext } from "./_app";

export default function Cart() {
  const [cartItems, setCartItems] = useContext(CartItemContext);
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalProducts, setTotalProducts] = useState(0);
  console.log(cartItems);

  useEffect(() => {
    let sum = 0;
    cartItems.map((cartItem) => (sum += cartItem.prodPrice));
    setTotalPrice(sum);
  }, [cartItems]);

  useEffect(() => {
    let sum = 0;
    cartItems.map((cartItem) => (sum += cartItem.q));
    setTotalProducts(sum);
  }, [cartItems]);

  return (
    <div class="w-1/2">
      <div class="flex flex-row w-1/2 space-x-20">
        <p>name:</p>
        <p>price:</p>
        <p>quantity:</p>
      </div>

      {cartItems.map((cartItem) => (
        <div class="flex flex-row w-1/2 space-x-20">
          <p>{cartItem.prodName}</p>
          <p>{cartItem.prodPrice}</p>
          <p>{cartItem.q}</p>
        </div>
      ))}

      <p>total price: {totalPrice}</p>
      <p>total number of products: {totalProducts}</p>
    </div>
  );
}
