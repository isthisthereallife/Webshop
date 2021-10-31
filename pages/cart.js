import { React, useContext, useEffect, useState } from "react";
import { CartItemContext } from "./_app";
//import styles from "../styles/Cart.module.css";
import styles from "../styles/Home.module.css";
import CheckoutButton from "../components/Button";

export default function Cart() {
  const [cartItems, setCartItems] = useContext(CartItemContext);
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalProducts, setTotalProducts] = useState(0);

  useEffect(() => {
    let sum = 0;
    cartItems.map((cartItem) => (sum += cartItem.prodPrice));
    setTotalPrice(sum);
  }, [cartItems]);

  useEffect(() => {
    let sum = 0;
    cartItems.map((cartItem) => (sum += parseInt(cartItem.q, 10)));
    setTotalProducts(sum);
  }, [cartItems]);

  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <div className={styles.shoppingcard}>
          <table className="table-fixed w-full">
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
                  <td className="border w-1/4 bg-white bg-opacity-70">
                    {cartItem.prodName}
                  </td>
                  <td className="border w-1/6 bg-white bg-opacity-70">
                    {cartItem.prodPrice}
                  </td>
                  <td className="border w-1/6 bg-white bg-opacity-70">
                    {cartItem.q}
                  </td>
                  <td className="w-1/12 bg-white bg-opacity-70">
                    <button
                      value={cartItem.prodName}
                      className="bg-red-600 text-white p-1"
                      onClick={(event) => {
                        const itemList = cartItems.filter(
                          (item) => item.prodName !== event.target.value
                        );
                        setCartItems([]);
                        setCartItems([...itemList]);
                      }}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <p className="bg-white bg-opacity-70">total price: {totalPrice}</p>
          <p className="bg-white bg-opacity-70">
            total number of products: {totalProducts}
          </p>
          <button
            className="bg-red-500 hover:bg-red-400 text-white font-bold py-4 px-8 rounded-full border-red-700 hover:border-red-500 rounded"
            onClick={() => {
              setCartItems([]);
            }}
          >
            Empty cart
          </button>

          <CheckoutButton />
        </div>
      </div>
    </div>
  );
}
