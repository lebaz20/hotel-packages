import React from "react";
import { Link } from "react-router-dom";
import { Row, Col, Button, Card } from "react-bootstrap";

const PackageItem = ({
  package: { name, price, duration, validity, description, _id: id },
  onDelete,
}) => {
  return (
    <Card>
      <Card.Body>
        <Card.Title>
          <Row>
            <Col>{name}</Col>
            <Col md={{ span: 4, offset: 2 }}>{price}</Col>
          </Row>
        </Card.Title>
        <Card.Text>{duration}</Card.Text>
        <Card.Text>{validity}</Card.Text>
        <Card.Text>{description}</Card.Text>
        <Row>
          <Col md={3}>
            <Link to={`/edit/${id}`}>
              <Button>Edit</Button>
            </Link>
          </Col>
          <Col md={3}>
            <Button onClick={() => onDelete(id)}>Delete</Button>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
};

export default PackageItem;
