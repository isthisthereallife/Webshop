/* eslint-disable sort-keys */
import { React } from "react";
import Swal from "sweetalert2";

export default function CheckoutButton() {
  return (
    <>
      <button
        className="bg-green-500 hover:bg-green-700 text-white font-bold py-4 px-8 rounded-full"
        // eslint-disable-next-line no-alert
        onClick={() =>
          // eslint-disable-next-line implicit-arrow-linebreak
          Swal.fire({
            icon: "error",
            title:
              "Hell no! You'r too old. You have to be 15 or younger to order alcohol.",
            imageUrl: "https://media.giphy.com/media/23BST5FQOc8k8/giphy.gif",
            imageWidth: 600,
            imageHeight: 400,
            width: 1500,
            height: 1000,
          })
        }
      >
        Checkout!
      </button>
    </>
  );
}
