import { useContext, useEffect, useRef, useState } from "react";
import { CartItemContext } from "./_app";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import styles from "../styles/Home.module.css";

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
    <div className={styles.container}>

      <div className={styles.main} className="bg-white rounded-md w-1/2 p-3">
        <table class="table-fixed">
          <thread>
            <tr>
              <th class="w-1/3">name:</th>
              <th class="w-1/3">price:</th>
              <th class="w-1/3">quantity:</th>
            </tr>
          </thread>
          <tbody>
            {cartItems.map((cartItem) => (
              <tr>
                <td class="border w-1/3">{cartItem.prodName}</td>
                <td class="border w-1/3">{cartItem.prodPrice}</td>
                <td class="border w-1/3">{cartItem.q}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <p>total price: {totalPrice}</p>
        <p>total number of products: {totalProducts}</p>
        <button
          class="bg-red-600 text-white p-1"
          onClick={() => {
            setCartItems([]);
          }}
        >
          Empty cart
        </button>
      </div>
    </div>
  );
}
