import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import { Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import { createCategory } from "../../../http/productAPI";

const CreateCategoryModal = ({ show, onHide }) => {
  const [value, setValue] = useState("");
  const addCategory = () => {
    createCategory({ name: value }).then((data) => setValue(""));
    onHide();
  };

  return (
    <Modal size="lg" centered show={show} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Add new category
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Label>Category name</Form.Label>
          <Form.Control
            value={value}
            onChange={(e) => setValue(e.target.value)}
            placeholder="Enter category name"
          />
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="outline-danger" onClick={onHide}>
          Close
        </Button>
        <Button variant="outline-success" onClick={addCategory}>
          Add
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default CreateCategoryModal;
