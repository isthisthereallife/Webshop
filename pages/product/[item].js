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
import Accordion from 'react-bootstrap/Accordion'
import loadingImage from '../../images/loadingImage.gif'

export default function Post({ product }) {
  console.log("product", product)
  if (!product) {
    return (
      <>
        <Container className={styles.container}>
          <div className={styles.imageDiv}>
            <Image className={styles.productImage} height="400px" width="200px" variant="top" src={loadingImage} />
          </div>
          <Card className={styles.productCard} >
            <Card.Body>
              <Accordion>
                <Accordion.Item eventKey="0">
                  <Accordion.Header>Loading</Accordion.Header>
                  <Accordion.Body>
                    Loading
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </Card.Body>
            <ListGroup className="list-group-flush">
              <ListGroupItem><Row><Col>Alc:</Col><Col>Loading</Col></Row></ListGroupItem>
              <ListGroupItem><Row><Col>Bitterness:</Col><Col>Loading</Col></Row></ListGroupItem>
              <ListGroupItem><Row><Col>pH:</Col><Col>Loading</Col></Row></ListGroupItem>
              <ListGroupItem className={styles.listGroupItemPrice}><Row><Col>Price: </Col><Col ><p className={styles.priceTag}>Loading</p></Col></Row></ListGroupItem>
            </ListGroup>
            <Card.Body>
              <Row>
                <Link href={`/`}>
                  <Button className={styles.buttonBack} as={Col}>Go Back</Button>
                </Link>
                <Button as={Col} className={styles.buttonAddToCart} onClick={(() => { alert(`"Tillagt" i "korgen"!\n\n\nnot really tho`) })}> Add to cart</Button>
              </Row>
            </Card.Body>
          </Card>
        </Container>
      </>

    )
  }
  else
    return (
      <>
        <Container className={styles.container}>
          <div className={styles.imageDiv}>
            <Image className={styles.productImage} height="400px" width="200px" variant="top" src={product[0].image_url} />
          </div>
          <Card className={styles.productCard} >
            <Card.Body>
              <Accordion>
                <Accordion.Item eventKey="0">
                  <Accordion.Header>{product[0].name}</Accordion.Header>
                  <Accordion.Body>
                    {product[0].description}
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </Card.Body>
            <ListGroup className="list-group-flush">
              <ListGroupItem><Row><Col>Alc:</Col><Col>{product[0].abv}</Col></Row></ListGroupItem>
              <ListGroupItem><Row><Col>Bitterness:</Col><Col>{product[0].ibu}</Col></Row></ListGroupItem>
              <ListGroupItem><Row><Col>pH:</Col><Col>{product[0].ph}</Col></Row></ListGroupItem>
              <ListGroupItem className={styles.listGroupItemPrice}><Row><Col>Price: </Col><Col ><p className={styles.priceTag}>${product[0].ibu}</p></Col></Row></ListGroupItem>
            </ListGroup>
            <Card.Body>
              <Row>
                <Link href={`/`}>
                  <Button className={styles.buttonBack} as={Col}>Go Back</Button>
                </Link>
                <Button as={Col} className={styles.buttonAddToCart} onClick={(() => { alert(`"Tillagt" i "korgen"!\n\n\nnot really tho`) })}> Add to cart</Button>
              </Row>
            </Card.Body>
          </Card>
        </Container>
      </>
    )
}

export async function getStaticPaths() {
  const res = await fetch('https://api.punkapi.com/v2/beers?page=1&per_page=80')
  const data = await res.json()

  const paths = data.map((product) => (
    {
      params: { item: `${product.id.toString()}` },
    }))



  return { paths, fallback: true }
}

export async function getStaticProps({ params }) {
  const res = await fetch(`https://api.punkapi.com/v2/beers/${params.item}`)
  const data = await res.json()
  return { props: { product: data } }
}