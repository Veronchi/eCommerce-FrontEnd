import { observer } from "mobx-react-lite";
import React from "react";
import { Card, Row } from "react-bootstrap";
import { useStore } from "../../hook/useStore";
import "./style.css";

const BrandBar = observer(() => {
  const { brand } = useStore();

  return (
    <Row className="card-container" as={"ul"}>
      {brand.brands.map((item) => {
        return (
          <Card
            className="brand-card"
            as={"li"}
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
