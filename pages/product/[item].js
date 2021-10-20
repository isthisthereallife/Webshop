import Link from 'next/link'
import Image from 'next/image'
import styles from '../../styles/[item].module.css'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup'
import ListGroupItem from 'react-bootstrap/ListGroupItem'

export default function Post({ product }) {
  console.log("product", product[0])
  return (
    <>
      <Container fluid className={styles.container}>
        <Card style={{ width: '90vw' }}>
          <Card.Img style={{ height: "400px", width: "200px" }} variant="bottom" src={product[0].image_url} />

          {//<Image layout='fill' variant="top" src={product[0].image_url} />
          }
          <Card.Body>
            <Card.Title>{product[0].name}</Card.Title>
            <Card.Text>{product[0].description}
            </Card.Text>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroupItem><Row><Col>Alc:</Col><Col>{product[0].abv}</Col></Row></ListGroupItem>
            <ListGroupItem><Row><Col>Bitterness:</Col><Col>{product[0].ibu}</Col></Row></ListGroupItem>
            <ListGroupItem><Row><Col>pH:</Col><Col>{product[0].ph}</Col></Row></ListGroupItem>
            <ListGroupItem><Row><Col>Price:</Col><Col>${product[0].ibu}</Col></Row></ListGroupItem>
          </ListGroup>
          <Card.Body>
            <Row>
              <Col>
                <Card.Link href={`/`}>
                  <Button>Go Back</Button>
                </Card.Link>
              </Col>
              <Col>
              </Col>
              <Col>
                <Button>Add to cart</Button>
              </Col>
            </Row>
          </Card.Body>
        </Card>
        <h2>Price: ${product[0].ibu}</h2>
      </Container>
    </>
  )
}

export async function getStaticPaths() {
  const res = await fetch('https://api.punkapi.com/v2/beers?page1&per_page=80')
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