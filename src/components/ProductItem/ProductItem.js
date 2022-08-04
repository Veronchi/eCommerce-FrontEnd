import React from "react";
import { Card, Image } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import star from "../../assets/star.svg";
import { PRODUCT_ROUTE } from "../../utils/consts";

import "./style.css";

const ProductItem = ({ product }) => {
  const navigate = useNavigate();

  return (
    <Card
      className="product-card"
      border={"light"}
      onClick={() => navigate(PRODUCT_ROUTE + "/" + product.id)}
    >
      <Image className="product-img" src={product.img} />
      <div className="card-info d-flex justify-content-between align-items-center">
        <div>Samsung...</div>
        <div className="d-flex align-items-center">
          <div>{product.rating}</div>
          <Image src={star} />
        </div>
      </div>
      <div>{product.name}</div>
    </Card>
  );
};

export default ProductItem;
