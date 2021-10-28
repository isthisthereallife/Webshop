import Head from "next/head"
import Image from "next/image"
import styles from "../styles/Home.module.css"
import Link from "next/link"

import imagePlaceholder from "../images/imagenotfound.png"
import { useEffect, useState, useRef } from "react"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

export default function Home({ data }) {
  const [beers, setBeers] = useState(data)
  const [sorted, setSorted] = useState(false)
  const [searchMode, setSearchMode] = useState("beer_name")
  const [searchValue, setSearchValue] = useState("")
  const [sortMode, setSortMode] = useState("name")
  const inputRef = useRef()

  //sortera bärsen utifrån vad som valts i dropdown
  function sortBy(property) {
    let templist = [...beers]
    switch (property) {
      case "ibu":
      case "id":
        setBeers(templist.sort((a, b) => a[property] - (b[property])))
        break
      default:
        setBeers(templist.sort((a, b) => a[property].localeCompare(b[property])))
    }
  }

  // aktiveras när ny data laddats in som inte sorterats
  useEffect(() => {
    if (!sorted) sortBy(sortMode)
    setSorted(true)
  }, [sorted])


  useEffect(async () => {
    //gör ny sökning varje gång searchValue eller searchMode ändras
    const newData = await customSearch(searchMode, searchValue)
    setBeers(newData)
    setSorted(false)
  }, [searchValue, searchMode, sortMode])

  //körs när nytt val görs i sökningsdropdownen
  const changeSearchMode = (e) => {
    setSearchMode(e.target.value)
  }
  //körs när nytt val görs i sorteringsdropdownen
  const changeSortMode = (e) => {
    setSortMode(e.target.value)
  }

  //fokus på sökfältet direkt, utan att behöva klicka där
  useEffect(() => {
    inputRef.current.focus()
  }, [])

  //körs när text i sökrutan ändras
  function handleChangeQuery(event) {
    setSearchValue(event.target.value)
  }


  return (
    <div className={styles.container}>
      <Head>
        <title>Brewdog</title>
      </Head>

      <main className={styles.main}>

        <h2>SEARCH</h2>
        <input
          type="text"
          ref={inputRef}
          placeholder="Search..."
          value={searchValue}
          onChange={handleChangeQuery}
        />

        <div>Search</div>
        <select value={searchMode} onChange={changeSearchMode}>
          <option value="beer_name">Name</option>
          <option value="hops">Hops</option>
          <option value="malt">Malt</option>
          <option value="food">Food pairings</option>
        </select>

        <div>Sort by</div>
        <select value={sortMode} onChange={changeSortMode}>
          <option value="name">Name</option>
          <option value="ibu">Price</option>

        </select>

        <div className={styles.grid}>
          {beers &&
            beers.map((beer) => (
              <div key={beer.id} className={styles.card}>
                < Image
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
    res = await fetch(`https://api.punkapi.com/v2/beers?page1&per_page=32`)
  } else {
    res = await fetch(
      `https://api.punkapi.com/v2/beers?${searchType}=${query}`
    )
  }
  const data = await res.json()
  return data
}

export async function getStaticProps() {
  const res = await fetch(`https://api.punkapi.com/v2/beers?page1&per_page=32`)
  const data = await res.json()

  return { props: { data } }
}
