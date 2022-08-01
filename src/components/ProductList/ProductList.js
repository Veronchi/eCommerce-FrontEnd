import { observer } from "mobx-react-lite";
import React, { useContext } from "react";
import { Context } from "../..";
import { Row } from "react-bootstrap";
import "./style.css"
import ProductItem from "../ProductItem/ProductItem";

const ProductList = observer(() => {
  const {product} = useContext(Context);
  
  return (
    <Row className="d-flex">
      {product.products.map((item) => {
        return <ProductItem key={item.id} product={item}/>
      })}
    </Row>
  );
});

export default ProductList;
