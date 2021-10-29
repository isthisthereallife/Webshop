import { React, useContext, useEffect, useState } from "react";
import { CartItemContext } from "./_app";
//import styles from "../styles/Cart.module.css";
import styles from "../styles/home.module.css";

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
      <div className={styles.main}>
        <div className={styles.shoppingcard}>
          <table className="table-fixed">
            <thread>
              <tr>
                <th className="w-1/3">name:</th>
                <th className="w-1/3">price:</th>
                <th className="w-1/3">quantity:</th>
              </tr>
            </thread>
            <tbody>
              {cartItems.map((cartItem) => (
                <tr key={cartItem.id}>
                  <td className="border w-1/3">{cartItem.prodName}</td>
                  <td className="border w-1/3">{cartItem.prodPrice}</td>
                  <td className="border w-1/3">{cartItem.q}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <p>total price: {totalPrice}</p>
          <p>total number of products: {totalProducts}</p>
          <button
            className="bg-red-500 hover:bg-red-400 text-white font-bold py-4 px-8 rounded-full border-red-700 hover:border-red-500 rounded"
            onClick={() => {
              setCartItems([]);
            }}
          >
            Empty cart
          </button>
          <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-4 px-8 rounded-full">
            Checkout!
          </button>
        </div>
      </div>
    </div>
  );
}
