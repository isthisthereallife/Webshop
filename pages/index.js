import Head from "next/head"
import Image from "next/image"
import styles from "../styles/Home.module.css"
import Link from "next/link"
import imagePlaceholder from "../images/imagenotfound.png"
import { useEffect, useState, useRef } from 'react'

export default function Home({ data }) {
  const [beers, setBeers] = useState(data)
  const [searchMode, setSearchMode] = useState("beer_name")
  const [searchValue, setSearchValue] = useState("")
  const inputRef = useRef()

  //körs när nytt val görs i dropdownen
  const changeSearchMode = ((e) => {
    setSearchMode(e.target.value)
  })

  //körs när text i sökrutan ändras
  function handleChangeQuery(event) {
    setSearchValue(event.target.value)
  }

  useEffect(async () => {
    //gör ny sökning varje gång searchValue eller searchMode ändras
    const newData = await customSearch(searchMode, searchValue)
    setBeers(newData)
  }, [searchValue, searchMode])

  return (
    <div className={styles.container}>
      <Head>
        <title>Brewdog</title>
      </Head>

      <main className={styles.main}>
        <h2>SEARCH</h2>
        <input type="text"
          ref={inputRef}
          placeholder="Search..."
          value={searchValue}
          onChange={handleChangeQuery}
        ></input>
        <select value={searchMode} onChange={changeSearchMode}>
          <option value="beer_name">Name</option>
          <option value="hops">Hops</option>
          <option value="malt">Malt</option>
          <option value="food">Food pairings</option>
        </select>


        <h1 className={styles.title}>BEERS</h1>

        <div className={styles.grid}>
          {beers && beers.map((beer) => (
            <div className={styles.card}>
              <Image
                unoptimized
                loader={() => beer.image_url}
                src={beer.image_url ? beer.image_url : imagePlaceholder}
                width={100}
                height={250}
                alt={beer.name}
              />
              <Link key={beer.id} href={`/product/${beer.id.toString()}`}>
                {beer.name}
              </Link>
            </div>
          ))}
        </div>
      </main>
    </div>
  )
}
//}

async function customSearch(searchType, query) {
  let res
  if (query.length === 0) {
    res = await fetch(`https://api.punkapi.com/v2/beers?page1&per_page=80`)
  }
  else {
    res = await fetch(`https://api.punkapi.com/v2/beers?${searchType}=${query}`)
  }
  const data = await res.json()
  return data
}


export async function getStaticProps() {
  const res = await fetch(`https://api.punkapi.com/v2/beers?page1&per_page=80`)
  const data = await res.json()

  return { props: { data } }
}