import { React, useEffect, useState } from "react"
import Link from "next/link"
import styles from "../styles/Home.module.css"
import styley from "../styles/checkout.module.css"
import CheckoutButton from "../components/Button"
import useCart from "../lib/hooks/useCart"
import { CART_ACTIONS } from "../lib/reducers/cartReducer"

export default function Cart() {
  const cart = useCart()

  const [totalPrice, setTotalPrice] = useState(0)
  const [totalProducts, setTotalProducts] = useState(0)

  useEffect(() => {
    let sum = 0
    cart.cart.cartItems.map((cartItem) => (sum += cartItem.ibu * cartItem.quantity))
    setTotalPrice(sum)
  }, [cart])

  useEffect(() => {
    let sum = 0
    cart.cart.cartItems.map((cartItem) => (sum += parseInt(cartItem.quantity, 10)))
    setTotalProducts(sum)
  }, [cart])

  if (cart.cart.cartItems.length < 1) {
    return (
      <div className={styles.container}>
        <div className={styles.main}>
          <div className={styles.shoppingcard}>
            <div>Your CART IS <strong>EMPTY</strong></div>

            <Link href={`/`}>
              <button style={{
                "borderColor": "red",
                "borderWidth": "2px"
              }}>
                Continue Shopping
              </button>
            </Link>
          </div>
        </div>
      </div>
    )
  }

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
              {cart.cart.cartItems.map((cartItem) => (
                <tr key={cartItem.id}>
                  <td className="border w-1/4 bg-white bg-opacity-70">
                    <Link key={cartItem.id} href={`/product/${cartItem.id.toString()}`}>
                      <div title="Click to visit store page" className={styley.itemName}>{cartItem.name}</div></Link>
                  </td>
                  <td title="Price/Item" className="border w-1/6 bg-white bg-opacity-70">
                    $ {cartItem.ibu}
                  </td>
                  <td title="Remove one" className="w-1/12 bg-white bg-opacity-70">
                    <button onClick={() => cart.cartDispatch({
                      payload: { ...cartItem },
                      type: CART_ACTIONS.REMOVE_ONE
                    })
                    }
                      type="none">
                      -
                    </button>
                  </td>
                  <td title="Quantity" className="border w-1/6 bg-white bg-opacity-70">
                    {cartItem.quantity}
                  </td>
                  <td title="Add one" className="w-1/12 bg-white bg-opacity-70">
                    <button onClick={() => cart.cartDispatch({
                      payload: { ...cartItem },
                      type: CART_ACTIONS.ADD
                    })
                    }
                      type="none">
                      +
                    </button>
                  </td>

                  <td title="Remove this item" className="w-1/12 bg-white bg-opacity-70">
                    <button
                      value={cartItem.name}
                      className="bg-red-600 text-white p-1"
                      onClick={() => {
                        cart.cartDispatch({
                          payload: {
                            ...cartItem
                          },
                          type: CART_ACTIONS.REMOVE_ITEM
                        })
                      }
                      }
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
            title="Empty your cart"
            className="bg-red-500 hover:bg-red-400 text-white font-bold py-4 px-8 rounded-full border-red-700 hover:border-red-500 rounded"
            onClick={() => {
              cart.cartDispatch({
                type: CART_ACTIONS.REMOVE_ALL
              })
            }
            }
          >
            Empty cart
          </button>

          <CheckoutButton />
        </div>
      </div>
    </div >
  )
}
