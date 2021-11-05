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
  const [sliderMin, setSliderMin] = useState({ id: "min",
  value: 30 })
  const [sliderMax, setSliderMax] = useState({ id: "max",
  value: 70 })


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
    //gör ny sökning varje gång searchValue eller searchMode eller sortMode eller slidern ändras
    const newData = await customSearch(searchMode, searchValue, sliderMin.value, sliderMax.value)
    setBeers(newData)
    setSorted(false)
  }, [searchValue, searchMode, sortMode, sliderMin, sliderMax])

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

  function sliderChange(e) {
    switch (e.target.id) {
      case "min":
        setSliderMin({ ...sliderMin,
        "value": e.target.value })

        /*
         * försäkra dej om att max är mer än min
         */
        if (sliderMin.value >= sliderMax.value - 1) {
            setSliderMax({ ...sliderMax,
            "value": parseInt(sliderMin.value, 10) + 1 })
            }
        break
      case "max":
        setSliderMax({ ...sliderMax,
        "value": e.target.value })
        if (sliderMax.value <= sliderMin.value + 1) {
          setSliderMin({ ...sliderMin,
          "value": parseInt(sliderMax.value, 10) - 1 })
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

        <div>Search for</div>
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
              <Link key={beer.id} href={`/product/${beer.id.toString()}`}>
              <div key={beer.id} className={styles.card}>
                <Image
                  unoptimized
                  loader={() => beer.image_url}
                  src={beer.image_url ? beer.image_url : imagePlaceholder}
                  width={100}
                  height={250}
                  alt={beer.name}
                />
                  <p className="text-3xl font-semibold text-s-700">{beer.name}</p>
                  <p className="text-2xl font-semibold text-green-500">${beer.ibu}</p>
              </div>
                </Link>
            ))}
        </div>
      </main>
    </div>
  );
}

async function customSearch(searchType, query, priceLow, priceHigh) {
  let res;
  let priceRange = `&ibu_gt=${priceLow}&ibu_lt=${priceHigh}`
  if (query.length === 0) {

    res = await fetch(`https://api.punkapi.com/v2/beers?page1&per_page=32${priceRange}`)

  } else {
    res = await fetch(
      `https://api.punkapi.com/v2/beers?${searchType}=${query}${priceRange}`
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
