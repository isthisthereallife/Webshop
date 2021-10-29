import Link from 'next/link'
import Image from 'next/image'
import { React } from 'react'
import styles from '../styles/Footer.module.css'
import copyLeft from "../images/Copyleft_white.svg"
export default function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.footerItem}>
        <Link href="https://github.com/isthisthereallife">
          Magnus
        </Link>
        <Link href="https://github.com/H0nken">
          Jonas
        </Link>
        <Link href="https://github.com/anderbecks">
          Ludvig
        </Link>
        <Link href="https://github.com/H0nken/webshop_school_project">
          src
        </Link>
      </div>
      <div className={styles.copyLeft}>
        <Image height="50px" width="50px" src={copyLeft} />  <div className={styles.orgName}>BR3WDOG</div></div>
    </ div >
  )
}
