/* eslint-disable sort-keys */
import { React, useContext, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "../../styles/[item].module.css";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import ListGroupItem from "react-bootstrap/ListGroupItem";
import Accordion from "react-bootstrap/Accordion";
import { OverlayTrigger, Popover } from "react-bootstrap";
import { CartItemContext } from "../_app";
import PropTypes from "prop-types";
import Swal from "sweetalert2";

Post.propTypes = {
  product: PropTypes.array,
};

export default function Post({ product }) {
  //const [quantity, setQuantity] = useState(1)
  const [cartItems, setCartItems] = useContext(CartItemContext);
  const quantityRef = useRef(1);

  const popover = (
    <Popover id="popover-basic">
      <strong>Added to cart</strong>
    </Popover>
  );

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <div className={styles.card}>
          <div>
            <div className={styles.cardItems}>
              <div className="box-content w-1/5 m-4">
                <Image
                  style="display:inline"
                  height="400px"
                  width="200px"
                  variant="top"
                  src={product[0].image_url}
                />
              </div>
              <div className="block w-4/5">
                <h3 className="font-bold text-lg">{product[0].name}</h3>
                <p className="font-light">{product[0].description}</p>

                <ListGroupItem>
                  <Row>
                    <br />
                    <Col>Alc: {product[0].abv}</Col>
                    <Col>Bitterness: {product[0].ibu}</Col>
                    <Col>pH: {product[0].ph}</Col>
                    <br />
                  </Row>
                </ListGroupItem>
                <ListGroup className="list-group-flush">
                  <ListGroupItem className={styles.listGroupItemPrice}>
                    <Row>
                      <Col>Price: </Col>
                      <Col>
                        <div className={styles.priceTag}>${product[0].ibu}</div>
                      </Col>
                    </Row>
                  </ListGroupItem>
                </ListGroup>
                <Card.Body>
                  <Row className={styles.quantityRow}>
                    <p>Quantity</p>
                    <input
                      className="m-1"
                      ref={quantityRef}
                      type="number"
                      placeholder="1"
                      min="1"
                      defaultValue="1"
                    ></input>
                  </Row>
                  <Row>
                    <Link href={`/`}>
                      <Button className={styles.buttonBack} as={Col}>
                        Continue Shopping
                      </Button>
                    </Link>
                    <OverlayTrigger
                      trigger="focus"
                      placement="right"
                      overlay={popover}
                    >
                      <Button
                        as={Col}
                        className={styles.buttonAddToCart}
                        // eslint-disable-next-line no-alert
                        onClick={() => {
                          //setQuantity(quantityRef.current.value.valueOf());
                          setCartItems((prevCartItems) => [
                            ...prevCartItems,
                            {
                              prodId: product[0].id,
                              prodName: product[0].name,
                              prodPrice:
                                product[0].ibu *
                                quantityRef.current.value.valueOf(),
                              q: quantityRef.current.value.valueOf(),
                            },
                          ]);

                          // eslint-disable-next-line implicit-arrow-linebreak
                          Swal.fire({
                            title: "Added to your Shopping Cart",
                            imageUrl:
                              "https://media.giphy.com/media/Od0QRnzwRBYmDU3eEO/giphy.gif",
                            imageWidth: 600,
                            imageHeight: 400,
                            width: 1500,
                            height: 1000,
                            timer: 2000,
                          });
                        }}
                      >
                        {" "}
                        Add to cart
                      </Button>
                    </OverlayTrigger>
                  </Row>
                </Card.Body>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export async function getStaticPaths() {
  const res = await fetch("https://api.punkapi.com/v2/beers?page1&per_page=80");
  const data = await res.json();

  const paths = data.map((product) => ({
    params: { item: `${product.id.toString()}` },
  }));

  return {
    fallback: true,
    paths,
  };
}

export async function getStaticProps({ params }) {
  const res = await fetch(`https://api.punkapi.com/v2/beers/${params.item}`);
  const data = await res.json();
  return { props: { product: data } };
}
