import React, { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import BrandBar from "../../components/BrandBar/BrandBar";
import CategoryBar from "../../components/CategoryBar/CategoryBar";
import ProductList from "../../components/ProductList/ProductList";
import { observer } from "mobx-react-lite";
import "./style.css";
import { useStore } from "../../hook/useStore";
import {
  fetchBrand,
  fetchCategory,
  fetchProducts,
} from "../../http/productAPI";

const Shop = observer(() => {
  const { category, brand, product } = useStore();

  useEffect(() => {
    fetchCategory().then((data) => category.setCategories(data));
    fetchBrand().then((data) => brand.setBrands(data));
    fetchProducts().then((data) => product.setProducts(data));
  }, []);

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
});

export default Shop;
