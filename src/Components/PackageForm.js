import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Alert, Form, Row, Col, Button } from "react-bootstrap";

const PackageForm = ({
  title,
  onSubmit,
  duration: originalDuration,
  validity: originalValidity,
  description: originalDescription,
  name: originalName,
  price: originalPrice,
}) => {
  const [duration, setDuration] = useState(originalDuration);
  const [validity, setValidity] = useState(originalValidity);
  const [description, setDescription] = useState(originalDescription);
  const [name, setName] = useState(originalName);
  const [price, setPrice] = useState(originalPrice);
  const [message, setMessage] = useState();
  const [messageType, setMessageType] = useState();

  return (
    <>
      <Row>
        <Col>
          <h2>{title}</h2>
        </Col>
        <Col md={{ span: 2, offset: 6 }}>
          <Link to="/">
            <Button>Back</Button>
          </Link>
        </Col>
      </Row>
      {message && <Alert variant={messageType}>{message}</Alert>}
      <Form
        onSubmit={(event) =>
          onSubmit({
            event,
            validity,
            duration,
            description,
            name,
            price,
            message,
            messageType,
            setMessage,
            setMessageType,
          })
        }
      >
        <Form.Group as={Row} controlId="name">
          <Form.Label column sm={2}>
            Name
          </Form.Label>
          <Col sm={10}>
            <Form.Control
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </Col>
        </Form.Group>

        <Form.Group as={Row} controlId="price">
          <Form.Label column sm={2}>
            Price
          </Form.Label>
          <Col sm={10}>
            <Form.Control
              type="number"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              step=".01"
              required
            />
          </Col>
        </Form.Group>

        <Form.Group as={Row} controlId="duration">
          <Form.Label column sm={2}>
            Duration
          </Form.Label>
          <Col sm={10}>
            <Form.Control
              type="text"
              value={duration}
              onChange={(e) => setDuration(e.target.value)}
              required
            />
          </Col>
        </Form.Group>

        <Form.Group as={Row} controlId="validity">
          <Form.Label column sm={2}>
            Validity
          </Form.Label>
          <Col sm={10}>
            <Form.Control
              type="text"
              value={validity}
              onChange={(e) => setValidity(e.target.value)}
              required
            />
          </Col>
        </Form.Group>

        <Form.Group as={Row} controlId="description">
          <Form.Label column sm={2}>
            Description
          </Form.Label>
          <Col sm={10}>
            <Form.Control
              type="text"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            />
          </Col>
        </Form.Group>

        <Form.Group as={Row}>
          <Col sm={{ span: 10, offset: 2 }}>
            <Button type="submit">Save Item</Button>
          </Col>
        </Form.Group>
      </Form>
    </>
  );
};

export default PackageForm;
