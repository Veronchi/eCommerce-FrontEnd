import { observer } from "mobx-react-lite";
import React from "react";
import { Row } from "react-bootstrap";
import { useStore } from "../../hook/useStore";
import ProductItem from "../ProductItem/ProductItem";
import "./style.css";

const ProductList = observer(() => {
  const { product } = useStore();

  return (
    <Row className="d-flex justify-content-between">
      {product.products.map((item) => {
        return <ProductItem key={item.id} product={item} />;
      })}
    </Row>
  );
});

export default ProductList;
