
export default function Post({ product }) {
  console.log("product", product)
  return (
    <div>
      <h1>Product: {product[0].name}</h1>
    </div>
  )
}

export async function getStaticPaths() {
  const res = await fetch('https://api.punkapi.com/v2/beers')
  const data = await res.json()

  const paths = data.map((product) => (
    {
      params: { item: `${product.id.toString()}` },
    }))
  console.log("paths", paths)



  return { paths, fallback: false }
}

export async function getStaticProps({ params }) {
  const res = await fetch(`https://api.punkapi.com/v2/beers/${params.item}`)
  const data = await res.json()
  return { props: { product: data } }
}