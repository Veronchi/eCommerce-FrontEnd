import React from "react";
import { Col, Container, Image, Row, Button } from "react-bootstrap";
import star from "../../assets/star.svg";
import "./style.css";

const ProductPage = () => {
  const product = {
    id: 1,
    name: "SamsungA52",
    price: 300,
    rating: 5,
    img: "https://static.1k.by/images/products/ip/big/ppe/9/4433776/ib5b20873e.png",
  };
  const description = [
    { id: 1, title: "Memory Storage", description: "128 GB" },
    { id: 2, title: "Operating System", description: "Android" },
  ];

  return (
    <Container className="product-container">
      <Row>
        <Col className="img-container" md={6}>
          <Image className="product-page-img" src={product.img} />
        </Col>
        <Col className="main-container" md={6}>
          <div className="title-container">
            <div>
              <h1 className="product-title">{product.name}</h1>
            </div>
            <div className="rating-container">
              {product.rating}
              <Image className="rating-img" src={star} />
            </div>
          </div>
          <div className="desc-container">
            <h3 className="desc-title">Description:</h3>
            <ul className="desc-list">
              {description.map((info) => {
                return (
                  <li className="desc-item" key={info.id}>
                    {info.title}: {info.description}
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="price-container">
            <h3>{product.price}$</h3>
            <Button variant={"outline-dark"}>Add to cart</Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductPage;
