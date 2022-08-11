import React from "react";
import Modal from "react-bootstrap/Modal";
import { Button } from "react-bootstrap";
import Form from 'react-bootstrap/Form';

const CreateCategoryModal = ({ show, onHide }) => {
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
        <Form.Control placeholder="Enter category name" />
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="outline-danger" onClick={onHide}>Close</Button>
        <Button variant="outline-success" onClick={onHide}>Add</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default CreateCategoryModal;
