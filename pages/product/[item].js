import { useState, useContext } from "react";
import Cart from "../cart";
import { CartItemContext } from "../_app";
import Link from "next/link";
import cartObj from "../cartObj";
import { setSum } from "../index";

export default function Post({ product }) {
  const [quantity, setQuantity] = useState(1);
  const [cart, setCart] = useState({ prodName: "", prodPrice: 20, q: 1 });
  const { cartItems, setCartItems } = useContext(CartItemContext);

  return (
    <div>
      <h1>Product: {product[0].name}</h1>
      <input
        type="number"
        value={quantity}
        onChange={(e) => {
          setQuantity(e.currentTarget.value);
        }}
      ></input>
      <button
        onClick={() => {
          setCartItems({
            prodName: product[0].name,
            prodPrice: product[0].ibu * quantity,
            q: quantity,
          });

          console.log(cartItems);
        }}
      >
        Buy
      </button>

      <Cart cart={cart}></Cart>
    </div>
  );
}

export async function getStaticPaths() {
  const res = await fetch("https://api.punkapi.com/v2/beers?page1&per_page=80");
  const data = await res.json();

  const paths = data.map((product) => ({
    params: { item: `${product.id.toString()}` },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const res = await fetch(`https://api.punkapi.com/v2/beers/${params.item}`);
  const data = await res.json();
  return { props: { product: data } };
}
