import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Alert, Row, Col, Button } from "react-bootstrap";
import graphql from "babel-plugin-relay/macro";
import { QueryRenderer, commitMutation } from "react-relay";
import environment from "../Services/Relay/environment";
import PackageItem from "./PackageItem";

const PackageList = () => {
  const [message, setMessage] = useState();
  const [messageType, setMessageType] = useState();

  const onDelete = async (packageId) => {
    const mutation = graphql`
      mutation PackageListDeleteMutation($packageId: Int!) {
        delete_package_by_pk(packageId: $packageId) {
          packageId
        }
      }
    `;

    let deleteResponse;
    try {
      deleteResponse = await new Promise((resolve, reject) =>
        commitMutation(environment, {
          mutation,
          variables: {
            packageId,
          },
          onCompleted: (response, errors) => {
            if (errors) {
              reject(errors);
            }
            resolve(response);
          },
          onError: (err) => reject(err),
        })
      );
    } catch (e) {
      console.error(e);
      setMessage("Failed to delete entry!");
      setMessageType("danger");
      return false;
    }

    setMessage(
      `Package item #${deleteResponse.delete_package_by_pk.packageId} deleted successfully.`
    );
    setMessageType("success");
    setTimeout(() => {
      window.location.reload();
    }, 5 * 1000);
    return true;
  };

  return (
    <>
      <Row>
        <Col>
          <h2>Package</h2>
        </Col>
        <Col md={{ span: 2, offset: 6 }}>
          <Link to="/new">
            <Button>Add Package Item</Button>
          </Link>
        </Col>
      </Row>
      {message && <Alert variant={messageType}>{message}</Alert>}
      <QueryRenderer
        environment={environment}
        query={graphql`
          query PackageListQuery {
            package {
              _id: packageId
              name
              price
              duration
              validity
              description
            }
          }
        `}
        variables={{}}
        render={({ error, props }) => {
          if (error) {
            console.error(error);
            return <div>Error!</div>;
          }
          if (!props) {
            return <div>Loading...</div>;
          }
          const size = 3;
          const packageChunks = Array.from(
            { length: Math.ceil(props.package.length / size) },
            (value, index) =>
              props.package.slice(index * size, index * size + size)
          );
          return packageChunks.map((packages) => (
            <Row key={packages[0]._id}>
              {packages.map((item) => (
                <Col md={4} key={item._id}>
                  <PackageItem package={item} onDelete={onDelete} />
                </Col>
              ))}
            </Row>
          ));
        }}
      />
    </>
  );
};

export default PackageList;
