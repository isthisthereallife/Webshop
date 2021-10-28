import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import sliderStyle from "../styles/sliderStyle.module.css"
import Link from "next/link";
import PropTypes from "prop-types"

import imagePlaceholder from "../images/imagenotfound.png";
import { React, useEffect, useState, useRef } from "react";

Home.propTypes = {
  data: PropTypes.array
}
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
    inputRef.current.focus();
  }, []);

  //körs när text i sökrutan ändras
  function handleChangeQuery(event) {
    setSearchValue(event.target.value);
  }
  const [sliderMin, setSliderMin] = useState({ id: "min",
  value: 30 })
  const [sliderMax, setSliderMax] = useState({ id: "max",
  value: 70 })

  /*
   * useEffect(() => {
   *   console.log("hej")
   * }), [sliderMin, sliderMax]
   */

  function sliderChange(e) {
    switch (e.target.id) {
      case "min":
        setSliderMin({ ...sliderMin,
        "value": e.target.value })
        console.log("sliderMin: ", sliderMin.value)

        /*
         * om sliderMin är lika med sliderMax-1 eller mer,
         * försäkra dej om att max är mer än min
         */
        if (sliderMin.value >= sliderMax.value - 1) {
            setSliderMax({ ...sliderMax,
            "value": parseInt(sliderMin.value, 10) + 1 })
          console.log("höjde också sliderMax till: ", sliderMax.value)
            }
        break
      case "max":
        setSliderMax({ ...sliderMax,
        "value": e.target.value })
        console.log("sliderMax: ", sliderMax.value)
        // försäkra dej om att min är mer än max
        if (sliderMax.value <= sliderMin.value + 1) {
          setSliderMin({ ...sliderMin,
          "value": parseInt(sliderMax.value, 10) - 1 })
          console.log("sänkte sliderMin till: ", sliderMin.value)
        }
        break
        default:
          break

  }
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

          <div>Price range</div>
        <div>From ${sliderMin.value} to ${sliderMax.value}</div>
        <div className={sliderStyle.slidercontainer}>
          <input type="range" min="0" max="99" value={sliderMin.value} className={sliderStyle.sliderMin} onChange={sliderChange} id={sliderMin.id}/>
          <input type="range" min="1" max="100" value={sliderMax.value} className={sliderStyle.sliderMax} onChange={sliderChange} id={sliderMax.id}/>
        </div>


        <div className={styles.grid}>
          {beers &&
            beers.map((beer) => (
              <div key={beer.id} className={styles.card}>
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
  );
}

//}

async function customSearch(searchType, query) {
  let res;
  if (query.length === 0) {

    res = await fetch(`https://api.punkapi.com/v2/beers?page1&per_page=32`)

  } else {
    res = await fetch(
      `https://api.punkapi.com/v2/beers?${searchType}=${query}`
    );
  }
  const data = await res.json();
  return data;
}

export async function getStaticProps() {

  const res = await fetch(`https://api.punkapi.com/v2/beers?page1&per_page=32`)
  const data = await res.json()


  return { props: { data } };
}
