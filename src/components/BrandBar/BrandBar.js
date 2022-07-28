import { observer } from "mobx-react-lite";
import React, { useContext } from "react";
import { Card, Row } from "react-bootstrap";
import { Context } from "../..";
import "./style.css";

const BrandBar = observer(() => {
  const { brand } = useContext(Context);

  return (
    <Row className="card-container">
      {brand.brands.map((item) => {
        return (
          <Card
            className="brand-card"
            key={item.id}
            onClick={() => brand.setSelectedBrand(item)}
            border={item.id === brand.selectedBrand.id ? "dark" : "light"}
          >
            {item.name}
          </Card>
        );
      })}
    </Row>
  );
});

export default BrandBar;
