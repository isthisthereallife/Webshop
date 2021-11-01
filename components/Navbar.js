import Link from "next/link"
import { React } from "react"
import styles from '../styles/Navbar.module.css'
export default function Navbar() {

  return (
    <div className={styles.navbar}>
      <Link href="/"><a>Home</a></Link>
      <Link href="/checkout"><a>Checkout</a></Link>
    </div>
  )
}
