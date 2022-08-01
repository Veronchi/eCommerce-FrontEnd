import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import BrandBar from "../../components/BrandBar/BrandBar";
import CategoryBar from "../../components/CategoryBar/CategoryBar";
import ProductList from "../../components/ProductList/ProductList";
import "./style.css";

const Shop = () => {
  return (
    <Container className="shop-container">
      <Row>
        <Col md={3}>
          <CategoryBar />
        </Col>
        <Col md={9}>
          <BrandBar />
          <ProductList />
        </Col>
      </Row>
    </Container>
  );
};

export default Shop;
