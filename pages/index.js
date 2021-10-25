import Head from "next/head"
import Image from "next/image"
import styles from "../styles/Home.module.css"
import Link from "next/link"
import { useEffect, useState, useRef } from 'react'
//import useSWR from 'swr'

export default function Home({ data }) {
  const [beers, setBeers] = useState(data)
  console.log("beeers", beers)
  console.log("data", data)
  const [searchMode, setSearchMode] = useState("beer_name")
  const [searchValue, setSearchValue] = useState("")
  const inputRef = useRef()
  const changeSearchMode = ((e) => {
    console.log(e.target.value)
    setSearchMode(e.target.value)

  })


  function handleChangeQuery(event) {
    console.log(event.target.value)
    setSearchValue(event.target.value)
  }

  useEffect(async () => {
    //kör den här varje gång input i textlådan ändras
    const newData = await customSearch(searchMode, searchValue)
    setBeers(newData)
  }, [searchValue])

  //if (searchValue.length === 0) {
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
          <option value="description">Description</option>
        </select>


        <h1 className={styles.title}>BEERS</h1>

        <div className={styles.grid}>
          {beers && beers.map((beer) => (
            <div className={styles.card}>
              <Image
                unoptimized
                loader={() => beer.image_url}
                src={beer.image_url}
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
    console.log("calling api with root query")
  }
  else {
    res = await fetch(`https://api.punkapi.com/v2/beers?${searchType}=${query}`)
    console.log("calling api with query: ", query)
  }
  //
  const data = await res.json()
  console.log("customSearch", data)
  return data
}


export async function getStaticProps() {
  const res = await fetch(`https://api.punkapi.com/v2/beers?page1&per_page=80`)
  const data = await res.json()

  return { props: { data } }
}

/*
  const fetcher = (url) => fetch(url).then((res) => res.json())
  function useQuery(q) {
    const { data, error } = useSWR(`https://api.punkapi.com/v2/beers?${searchMode}=${searchValue}`, fetcher)
    console.log("beeeers", data)
    return {
      beers: data,
      isLoading: !error && !data,
      isError: error
    }
  }
  useQuery()
*/