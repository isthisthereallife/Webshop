import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import { useEffect } from "react";

export default function Home({ data }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Brewdog</title>
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Beers:</h1>

        <div className={styles.grid}>
          {data.map((beer) => (
            <div className={styles.card}>
              <h3>{beer.name}</h3>
              <Image
                loader={() => beer.image_url}
                src={beer.image_url}
                width={100}
                height={250}
                alt={beer.name}
              />
              <Link key={beer.id} href={`/product/${beer.id.toString()}`}>
                <button>more info</button>
              </Link>
              <h5>Price: {beer.ibu} SEK</h5>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
export async function getStaticProps() {
  const res = await fetch(`https://api.punkapi.com/v2/beers?page1&per_page=80`);
  const data = await res.json();
  return { props: { data } };
}
