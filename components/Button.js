import { React } from "react"
import Swal from "sweetalert2"

export default function CheckoutButton() {
  return (
    <>
      <button
        className="bg-green-500 hover:bg-green-700 text-white font-bold py-4 px-8 rounded-full"
        onClick={() => Swal.fire({
          height: 1000,
          icon: "error",
          imageHeight: 400,
          imageUrl: "https://media.giphy.com/media/23BST5FQOc8k8/giphy.gif",
          imageWidth: 600,
          title:
            "Hell no! You'r too old. You have to be 15 or younger to drink booze.",
          width: 1500
        })
        }
      >
        Checkout!
      </button>
    </>
  )
}
