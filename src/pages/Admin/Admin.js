import React, { useState } from "react";
import { Button, Container } from "react-bootstrap";
import CreateBrandModal from "../../components/modals/CreateBrandModal/CreateBrandModal";
import CreateCategoryModal from "../../components/modals/CreateCategoryModal/CreateCategoryModal";
import CreateProductModal from "../../components/modals/CreateProductModal/CreateProductModal";
import "./style.css";

const Admin = () => {
  const [isBrandVisible, setIsBrandVisible] = useState(false);
  const [isCategoryVisible, setIsCategoryVisible] = useState(false);
  const [isProductVisible, setIsProductVisible] = useState(false);

  return (
    <Container className="admin-container d-flex justify-content-center">
      {/* <Container className="d-flex "> */}
        <Button
          className="add-btn"
          variant={"outline-dark"}
          onClick={() => setIsCategoryVisible(true)}
        >
          Add cotegory
        </Button>
        <Button
          className="add-btn"
          variant={"outline-dark"}
          onClick={() => setIsBrandVisible(true)}
        >
          Add brand
        </Button>
        <Button
          className="add-btn"
          variant={"outline-dark"}
          onClick={() => setIsProductVisible(true)}
        >
          Add product
        </Button>
      {/* </Container> */}
      <CreateCategoryModal
        show={isCategoryVisible}
        onHide={() => setIsCategoryVisible(false)}
      />
      <CreateBrandModal
        show={isBrandVisible}
        onHide={() => setIsBrandVisible(false)}
      />
      <CreateProductModal
        show={isProductVisible}
        onHide={() => setIsProductVisible(false)}
      />
    </Container>
  );
};

export default Admin;
