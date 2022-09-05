import React, { useEffect, useState } from "react";
import { Col, Container, Image, Row, Button, Table } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { fetchOneProduct } from "../../http/productAPI";
import star from "../../assets/star.svg";
import "./style.css";

const ProductPage = () => {
  const [product, setProduct] = useState({ info: [] });
  const { id } = useParams();

  useEffect(() => {
    fetchOneProduct(id).then((data) => setProduct(data));
  }, []);

  return (
    <Container className="product-container">
      <Row>
        <Col className="img-container" md={6}>
          <Image
            className="product-page-img"
            src={`${process.env.REACT_APP_API_URL}/${product.img}`}
          />
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
          <div className="price-container">
            <h3>{product.price}$</h3>
            <Button variant={"outline-dark"}>Add to cart</Button>
          </div>
        </Col>
        <div className="desc-container">
          <h3 className="desc-title">Description:</h3>
          <Table striped>
            <tbody>
              {product.info.map((info) => {
                return (
                  <tr className="desc-item" key={info.id}>
                    <td>{info.title}</td>
                    <td>{info.description}</td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </div>
      </Row>
    </Container>
  );
};

export default ProductPage;
